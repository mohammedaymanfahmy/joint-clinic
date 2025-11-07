import { UserRepoPort } from "modules/auth/application/ports/UserRepoPort";
import { User } from "modules/auth/domain/User";
import { UserModel } from "../models/UserModel";

export class UserRepoMongo implements UserRepoPort {
  async findByEmailOrPhone(contact: string): Promise<User | null> {
    return UserModel.findOne({ contact });
  }

  async create(user: User): Promise<void> {
    const userModel = new UserModel(user);
    await userModel.save();
  }
}
