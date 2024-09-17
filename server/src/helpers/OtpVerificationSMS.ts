import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

export const sendOtpSms = async (phone: string, otp: string | number) => {
    try {
        await client.messages.create({
            body: `Your OTP is ${otp} and it expires in 5 minutes - Predictif Sports`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone,
        });
    } catch (error) {
        console.log(error);
    }
}