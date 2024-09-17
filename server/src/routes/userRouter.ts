import { Router } from 'express';
import { Register, Login, VerifyOTP, Logout, Authenticated, ResendOTP } from '../controllers/UserController';
import { Auth } from '../middlewares/Auth';
import { loginValidation, registerValidation, verifyOTPValidation } from '../validations/Validations';

const router = Router();

router.post('/auth/register', registerValidation, Register);
router.post('/auth/login', loginValidation, Login);
router.post('/auth/authenticated', Auth, Authenticated);
router.post('/auth/verify-otp', verifyOTPValidation, VerifyOTP);
router.post('/auth/resend-otp', ResendOTP);
router.post('/auth/logout', Auth, Logout);

export default router;