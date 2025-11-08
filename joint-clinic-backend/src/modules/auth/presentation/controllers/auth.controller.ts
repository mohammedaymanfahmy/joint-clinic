import { Request, Response } from 'express';
import { CreatePartialUserSchema, FindUserSchema, RequestOtpSchema, VerifyOtpSchema } from '../validators/auth.schemas.js';
import { RequestOtp } from '../../application/use-cases/RequestOtp.js';
import { VerifyOtp } from '../../application/use-cases/VerifyOtp.js';
import { FindUser } from 'modules/auth/application/use-cases/FindUser.js';
import { CreatePartialUser } from 'modules/auth/application/use-cases/CreatePartialUser.js';
import { resolve } from '../../../../app/container.js';
import { OTP_REPO } from 'app/container.bindings.js';
import { USER_AUTH_REPO } from 'app/container.bindings.js';

export async function requestOtp(req: Request, res: Response) {
  const { subjectRef, subjectType } = RequestOtpSchema.parse(req.body);
  const uc = new RequestOtp(resolve(OTP_REPO));
  const result = await uc.exec(subjectType, subjectRef);
  res.json({ ok: true, otpToken: result.otpToken });
}

export async function findUser(req: Request, res: Response) {
  const { contact } = FindUserSchema.parse(req.body);
  const uc = new FindUser(resolve(USER_AUTH_REPO));
  const user = await uc.exec(contact);
  if (!user) {
      return res.status(400).json({ ok: false, message: 'User Not Found.' });
  }
  res.json({ ok: true, message: 'User Found.', user });
}

export async function createPartialUser(req: Request, res: Response) {
  const { fullName, gender, birthDate } = CreatePartialUserSchema.parse(req.body);
  const uc = new CreatePartialUser(resolve(USER_AUTH_REPO));
  const user = await uc.exec({ fullName, gender, birthDate: birthDate ? new Date(birthDate) : undefined });
  res.json({ ok: true, message: 'Partial User Created.', user });
}

export async function verifyOtp(req: Request, res: Response) {
  const { otpToken, code } = VerifyOtpSchema.parse(req.body);
  const uc = new VerifyOtp(resolve(OTP_REPO));
  const result = await uc.exec(otpToken, code);


  //TODO: Test this part

  if (result.ok) return res.json(result);
  const statusMap: Record<string, number> = { invalid: 401, expired: 400, locked: 429, not_found: 404, invalid_token: 401 };
  const status = result.reason ? (statusMap[result.reason] ?? 400) : 400;
  return res.status(status).json(result);
}
