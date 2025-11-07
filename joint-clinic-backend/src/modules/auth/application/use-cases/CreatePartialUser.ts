import { UserRepoPort } from "../ports/UserRepoPort";

export class CreatePartialUser {
    constructor(private userRepo: UserRepoPort) {}
    async exec(info: { fullName?: string; gender?: 'Male' | 'Female', birthDate?: Date } = {}) {
        const user = await this.userRepo.create({ ...info });
        return user;
    }
}