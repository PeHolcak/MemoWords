import User, { IUser } from "@models/user.model";

import bcryptjs from "bcryptjs";

export class UserService {
  async updateUser(userId: string, userData: IUser): Promise<IUser | null> {
    const updateData = userData.password
      ? {
          ...userData,
          password: bcryptjs.hashSync(userData.password, 10),
        }
      : userData;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true, lean: true }
    );

    return updatedUser;
  }

  async deleteUser(userId: string) {
    return await User.findByIdAndDelete(userId);
  }

  async listUsers(pageSize: number, pageIndex: number) {
    const skip = pageSize * pageIndex;

    return await User.find({}).skip(skip).limit(pageSize);
  }
}
