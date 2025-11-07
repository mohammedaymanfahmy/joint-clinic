import { UserRepoPort } from "../ports/UserRepoPort";

export class FindUser {
    constructor(private userRepo: UserRepoPort) {}
    async exec(contact: string) {
        const user = await this.userRepo.findByEmailOrPhone(contact);
        return user;
    }
}