import { detectContactType } from "shared/utils/detectContactType";
import { UserRepoPort } from "../ports/UserRepoPort";
import { User } from "modules/auth/domain/User";

export class FindUserByContact {
    constructor(private userRepo: UserRepoPort) {}
    async exec(contact: string): Promise<User | null> {
        const contactType = detectContactType(contact);
        if (contactType === 'invalid') return null;
        const user = await this.userRepo.findByEmailOrPhone(contact);
        return user;
    }
}