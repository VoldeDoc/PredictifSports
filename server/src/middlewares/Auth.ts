import jsonwebtoken from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import User from '../models/UserModel';

dotenv.config();

interface IVerified {
    id: string;
}

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.headers.Authorization) {
            var token = (req.headers.Authorization as string).split(' ')[1];
        } else {
            var token = req.cookies.authToken as string;
        }

        if (!token) return res.status(401).json({ message: 'Access Denied', valid: false });
        jsonwebtoken.verify(token, process.env.JWT_SECRET as string, async (error: any, verified: any) => {
            if (error) return res.status(401).json({ message: 'Invalid token', valid: false });
            const user = await User.findById((verified as IVerified).id);
            console.log("🚀 ~ jsonwebtoken.verify ~ user:", user)
            if (!user) return res.status(401).json({ message: 'User not found', valid: false });
            (req as any).user = user;
            (req as any).userId = user._id;
            (req.session as any).userId = user._id;
            (req.session as any).user = user;
            next();
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({ message: 'Server Error', success: false });
    }
}