// path: src/modules/auth/presentation/routes.ts
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { createPartialUser, findUser, requestOtp, verifyOtp } from './controllers/auth.controller.js';

export const authRoutes = Router();

const requestLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false
});

const verifyLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false
});
// rate limit for each route?
authRoutes.post('/find-user', requestLimiter, findUser);
authRoutes.post('/otp/request', requestLimiter, requestOtp);
authRoutes.post('/create-partial-user', requestLimiter, createPartialUser);
// authRoutes.post('/auth/user', requestLimiter, createFullUser);

authRoutes.post('/otp/verify', verifyLimiter, verifyOtp);
// enter his email or phone 
// if user found, send otp
// if user not found, ask for more info (fullName, gender, birthDate) then create partial user and send otp
// after otp verified, if partial user, ask for more info to complete profile