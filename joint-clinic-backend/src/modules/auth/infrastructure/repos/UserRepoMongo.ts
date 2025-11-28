import { UserRepoPort } from "modules/auth/application/ports/UserRepoPort";
import { User } from "modules/auth/domain/User";
import { UserModel } from "../models/UserModel";

export const UserRepoMongo: UserRepoPort = {
  async findByEmailOrPhone(contact: string): Promise<User | null> {
    return UserModel.findOne({ [contact]: contact });
  },

  async findById(id: string): Promise<User | null> {
    return UserModel.findById(id);
  },

  async save(user: Partial<User>): Promise<User | null> {
    console.log("Saving user to MongoDB...", user._doc._id);
    const userModel = await UserModel.findById(user._doc._id);
    console.log("Saving user to MongoDB...", userModel);
    if (!userModel) return null;
    Object.assign(userModel, user);
    await userModel.save();
    console.log("User saved in MongoDB:", userModel);
    return userModel as any as User;
  },

  async create(user: Partial<User>): Promise<User> {
    const userModel = new UserModel({ ...user });
    await userModel.save();
    return userModel as any as User;
  },

  async updateUserStatus(userId: string, statusUpdate: Partial<User['userStatus']>): Promise<void> {
    console.log("Updating user status in MongoDB...", statusUpdate);
    const updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, { $set: { userStatus: { ...statusUpdate } } }, { new: true });
    console.log("User status updated in MongoDB", updatedUser);
  }
}
