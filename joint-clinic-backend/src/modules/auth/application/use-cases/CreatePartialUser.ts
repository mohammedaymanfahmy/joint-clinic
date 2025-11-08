import { UserRepoPort } from "../ports/UserRepoPort";

export class CreatePartialUser {
    constructor(private userRepo: UserRepoPort) {}
    async exec(info: { fullName?: string, gender?: 'Male' | 'Female' | 'male' | 'female', birthdate?: Date, contact?: string } = {}) {
        const user = await this.userRepo.create({ ...info });
        console.log("nldkfs", user)
        return user;
    }
}