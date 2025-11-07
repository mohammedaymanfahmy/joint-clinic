import { OTPRepoPort } from '../ports/OTPRepoPort.js';
import { verifyHash } from '../../../../shared/utils/crypto.js';
import { security } from '../../../../config/security.js';
import jwt from 'jsonwebtoken';

export class VerifyOtp {
  constructor(private otpRepo: OTPRepoPort) { }

  async exec(otpToken:string, code: string): Promise<{ok: Boolean, reason?: 'invalid' | 'expired' | 'locked' | 'not_found' | 'invalid_token'}> {
    const jwtSecret = process.env.JWT_SECRET as string
    let payload;
    try {
      payload = jwt.verify(otpToken, jwtSecret)
    } catch (err) {
      return { ok: false, reason: 'invalid_token' };
    }
    const { subjectType, subjectRef } = payload as any;
    const otp = await this.otpRepo.latest(subjectType, subjectRef);
    if (!otp) return { ok: false, reason: 'not_found' };

    const expired = otp.expiresAt < new Date();
    if (otp.status !== 'active' || expired) {
      otp.status = 'expired';
      await this.otpRepo.save(otp);
      return { ok: false, reason: 'expired' };
    }

    if (otp.attempts >= security.otp.maxAttempts) {
      otp.status = 'locked';
      await this.otpRepo.save(otp);
      return { ok: false, reason: 'locked' };
    }

    const match = await verifyHash(otp.codeHash, code);
    otp.attempts += 1;

    if (match) {
      otp.status = 'used';
      await this.otpRepo.save(otp);
      return { ok: true };
    } else {
      await this.otpRepo.save(otp);
      return { ok: false, reason: 'invalid' };
    }
  }
}
