import { UserRepoPort } from "modules/auth/application/ports/UserRepoPort";
import { User } from "modules/auth/domain/User";
import { UserModel } from "../models/UserModel";

export const UserRepoMongo: UserRepoPort = {
  async findByEmailOrPhone(contact: string): Promise<User | null> {
    return UserModel.findOne({ contact });
  },

  async create(user: Partial<User>): Promise<User> {
    console.log("Creating user:", user);
    const userModel = new UserModel(user);
    await userModel.save();
    return userModel as any as User;
  }
}
