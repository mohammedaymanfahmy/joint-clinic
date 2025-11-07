import { z } from 'zod';
export const RequestOtpSchema = z.object({ subjectType: z.enum(['report','login']), subjectRef: z.string().min(1) });
export const FindUserSchema = z.object({ contact: z.string().min(1) });
export const CreatePartialUserSchema = z.object({ fullName: z.string().min(1), gender: z.enum(['Male', 'Female']), birthDate: z.string(), });
export const VerifyOtpSchema = z.object({ otpToken: z.string().min(1), code: z.string().length(6) });