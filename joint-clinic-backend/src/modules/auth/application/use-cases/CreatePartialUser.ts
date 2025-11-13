import { detectContactType } from "shared/utils/detectContactType";
import { UserRepoPort } from "../ports/UserRepoPort";

export class CreatePartialUser {
    constructor(private userRepo: UserRepoPort) {}
    async exec(fullName: string, gender: 'Male' | 'Female' | 'male' | 'female', birthdate: Date, contact: string) {
        const contactType = detectContactType(contact);
        const user = await this.userRepo.create({ fullName, gender, birthdate, [contactType]: contact, userStatus: { partialProfileCompleted: true, registerOtpVerified: false, fullProfileCompleted: false } });
        return user;
    }
}