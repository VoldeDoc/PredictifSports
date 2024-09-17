import { NextFunction, Request, Response } from 'express';
import User from '../models/UserModel';
import { sendOtpVerificationEmail } from '../helpers/OtpVerificationEmail';
import { sendOtpSms } from '../helpers/OtpVerificationSMS';


// Register a new user
export const Register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, phone, password } = req.body; //get the name, email, phone, and password from the request body (destructuring)
        const user = new User({ name, email, phone, password }); //create a new user object
        const token = await user.generateAuthToken(); //generate a token for the user
        const otp = await user.generateOTP(); //generate an OTP for the user
        const otp_exp_at = new Date(new Date().getTime() + 5 * 60000); //set the expiry time to 5 minutes
        user.otp = otp; //set the otp in the user object
        user.otp_exp_at = otp_exp_at; //set the expiry time in the user object
        (req.session as any).userId = user._id; //set the user id in the session
        req.session.save((err) => {
            if (err) return next(err);
        })
        await user.save(); //save the user to the database
        await sendOtpVerificationEmail(user.name, user.email, user.otp); //send an OTP verification email to the user
        // await sendOtpSms(user.phone, user.otp); //send an OTP verification SMS to the user
        res.status(201).json({ success: true, message: 'User registered successfully' }); //send a response with the and a success message
    } catch (error) {
        res.status(400).json({ message: 'An error occurred while registering the user', success: false });  //send a response with an error message
    }
}

export const Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body; //get the email and password from the request body (destructuring)
        const user = await User.findOne({ email }).select('id name email password token token_exp_at'); //find the user by email and select the id, password, token, and token_exp_at
        if (!user) return res.status(401).json({ message: 'Invalid credentials', success: false });  //send a response if the user is not found
        const isMatch = await user.comparePassword(password); //compare the password with the hashed password
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials', success: false }); //send a response if the credentials are invalid
        const otp = await user.generateOTP(); //generate an OTP for the user
        const otp_exp_at = new Date(new Date().getTime() + 5 * 60000); //set the expiry time to 5 minutes
        await sendOtpVerificationEmail(user.name, user.email, otp); //send an OTP verification email to the user
        // await sendOtpSms(user.phone, otp); //send an OTP verification SMS to the user
        (req.session as any).userId = user._id; //set the user id in the session
        req.session.save((err) => {
            if (err) return next(err);
        })
        await user.updateOne({
            otp,
            otp_exp_at,
        }); //update the user object with the otp and expiry time
        res.status(200).json({ success: true, message: 'User logged in successfully' }); //send a response with the and a success message
    } catch (error) {
        res.status(400).json({ message: 'An error occurred while logging in the user', success: false }); //send a response with an error message
    }
}

export const VerifyOTP = async (req: Request, res: Response) => {
    try {
        const { otp } = req.body; //get the OTP from the request body
        const user = await User.findById((req.session as any).userId).select('name otp otp_exp_at verified'); //find the user by id and select the otp, expiry time, and verified
        if (!user) return res.status(401).json({ message: 'User not found', success: false }); //send a response if the user is not found
        console.log(user.otp, otp);
        if (user.otp !== otp) return res.status(400).json({ message: 'Invalid OTP', success: false }); //send a response if the OTP is invalid
        if (!user.otp_exp_at || new Date() > user.otp_exp_at) return res.status(400).json({ message: 'OTP expired', success: false }); //send a response if the OTP is expired
        if (!user.verified) {
            user.setProperties({ verified: true, otp: null, otp_exp_at: null }); //set the user properties
        } else {
            user.setProperties({ otp: null, otp_exp_at: null }); //set the user properties
        }
        await user.updateOne(user); //update the user object
        const token = req.body.remember ? await user.generateAuthToken(true) : await user.generateAuthToken(); //generate a token for the user
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' }); //set the token in a cookie
        res.status(200).json({ success: true, message: 'OTP verified successfully', name: user.name }); //send a response with the and a success message
    } catch (error) {
        res.status(400).json({ message: 'An error occurred while verifying the OTP', success: false }); //send a response with an error message
    }
}

export const ResendOTP = async (req: Request, res: Response) => {
    try {
        const user = await User.findById((req.session as any).userId).select('name email phone otp'); //find the user by id and select the name, email, phone, and otp
        if (!user) return res.status(401).json({ message: 'User not found', success: false }); //send a response if the user is not found
        const otp = await user.generateOTP(); //generate an OTP for the user
        const otp_exp_at = new Date(new Date().getTime() + 5 * 60000); //set the expiry time to 5 minutes
        await sendOtpVerificationEmail(user.name, user.email, otp); //send an OTP verification email to the user
        // await sendOtpSms(user.phone, otp); //send an OTP verification SMS to the user
        await user.updateOne({
            otp,
            otp_exp_at,
        }); //update the user object with the otp and expiry time
        res.status(200).json({ success: true, message: 'OTP resent successfully' }); //send a response with the and a success message
    } catch (error) {
        res.status(400).json({ message: 'An error occurred while resending the OTP', success: false }); //send a response with an error message
    }
}


export const Logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('token'); //clear the token cookie
        res.status(200).json({ success: true, message: 'User logged out successfully' }); //send a response with a success message
    } catch (error) {
        res.status(400).json({ message: 'An error occurred while logging out the user', success: false }); //send a response with an error message
    }
}

export const Authenticated = async (req: Request, res: Response) => {
    try {
        const user = await User.findById((req.session as any).userId).select('-password'); //find the user by id and exclude the password
        if (!user) return res.status(401).json({ message: 'User not found', success: false }); //send a response if the user is not found
        res.status(200).json({ user, success: true }); //send a response with the user
    } catch (error) {
        res.status(400).json({ message: 'An error occurred while getting the user', success: false }); //send a response with an error message
    }
}

