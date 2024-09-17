import { Request, Response, NextFunction } from 'express';
import  User  from '../models/UserModel';

export const setUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById((req as any).userId);
        if (!user) {
            return res.status(401).json({ message: 'User not found', success: false });
        }
        (req as any).user = user;
        (req as any).userId = user._id;
        next();
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', success: false });
    }
};