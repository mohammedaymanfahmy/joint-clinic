import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import { OTPRepoPort } from '../ports/OTPRepoPort.js';
import { randomCode, hashValue } from '../../../../shared/utils/crypto.js';
import { security } from '../../../../config/security.js';
import { randomUUID } from 'node:crypto';
import { SMSPort } from 'infra/sms/sms.port.js';
import { MailPort } from 'infra/mail/mail.port.js';

export class RequestOtp {
  constructor(private otpRepo: OTPRepoPort, private smsRepo: SMSPort, private mailRepo: MailPort) {}
  async exec(subjectType: 'report'|'login', subjectRef: string, contact: string) {
    const code = randomCode(6);
    const codeHash = await hashValue(code);
    const expiresAt = dayjs().add(security.otp.ttlMinutes, 'minute').toDate();
    await this.otpRepo.create({ _id: randomUUID(), subjectType, subjectRef, codeHash, expiresAt, attempts: 0, status: 'active' });
    const jwtSecret = process.env.JWT_SECRET as string;
    const otpToken = jwt.sign({ subjectType, subjectRef }, jwtSecret, { expiresIn: security.otp.ttlMinutes * 60 });
    const contactType = this.detectContactType(contact)
    try {
      if(contactType === 'phone') {
        await this.smsRepo.send(contact, code)
      } else if (contactType === 'email') {
        await this.mailRepo.send(contact, '', {otp: code})
      } else {
        throw new Error('Invalid contact Type')
      }
    } catch (error) {
      return {err: (error as any).message}
    }
    // return { code }; // for demo; in prod send via SMS/Email
    return { otpToken };
  }

  private detectContactType(input: string): 'phone' | 'email' | 'invalid' {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (emailRegex.test(input)) return 'email';
    if (phoneRegex.test(input)) return 'phone';
    return 'invalid';
  }
}
