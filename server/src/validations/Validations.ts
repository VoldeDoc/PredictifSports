import { checkForValidationError } from '../middlewares/CheckForValidationError';
import { body } from 'express-validator';
import User from '../models/UserModel';

export const registerValidation = [
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long').trim(),
    body('phone').notEmpty().withMessage('Phone number is required').isNumeric().withMessage('Phone number must be numeric').isLength({ min: 14, max: 14 }).withMessage('Phone number must be 14 characters long and in format of +234').isMobilePhone('en-NG').withMessage('Invalid phone number. Please enter a valid phone number format (+234)').custom(async (value) => {
        const user = await User.findOne({ username: value });
        if (user) {
            throw new Error('Username is already taken');
        }
        return true;
    }).trim(),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email. Please enter valid email').custom(async (value) => {
        const user = await User.findOne({ email: value });
        console.log(user);
        if (user) {
            throw new Error('Please enter a different email');
        }
        return true;
    }).normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').isStrongPassword().withMessage('Password must contain at least one uppercase letter, one lowercase letter, one special character and one number'),
    body('confirmPassword').notEmpty().withMessage('Confirm Password is required').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords do not match. Please enter the same password');
        }
        return true;
    }),
    body('terms').notEmpty().withMessage('Please accept the terms and conditions').isBoolean().withMessage('Please accept the terms and conditions').equals('true').withMessage('Please accept the terms and conditions'),
    checkForValidationError
];

export const loginValidation = [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('remember').optional().isBoolean().withMessage('Remember must be a boolean'),
    checkForValidationError
];

export const verifyOTPValidation = [
    body('otp').notEmpty().withMessage('OTP is required').isNumeric().withMessage('OTP must be numeric').isLength({ min: 4, max: 4 }).withMessage('OTP must be 4 characters long').custom(async (value, { req }) => {        
        const user = await User.findById((req.session as any).userId);
        if (!user) {
            throw new Error('Something went wrong. Please try logging in again');
        } else if (user.otp !== value) {
            throw new Error('Invalid OTP. Please enter the correct OTP');
        } else if (!user.otp_exp_at || new Date() > user.otp_exp_at) {
            throw new Error('OTP expired. Please request for a new OTP');
        }
        return true;
    }),
    checkForValidationError
];