import { Request, Response, NextFunction } from "express";

import { UserService } from "@services/user.service";
import { userUpdateSchema, userListSchema } from "@dtoIns/user.validation";
import { createError } from "@utils/error";

import { validateListUsersData } from "@validators/user/user-list";

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_INDEX = 0;

const userService = new UserService();

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validData = await userUpdateSchema.validate(req.body);

  try {
    const updatedUser = await userService.updateUser(req.params.id, validData);

    if (!updatedUser) {
      return next(createError(404, "User not found"));
    }

    const { password, ...rest } = updatedUser;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};

export const listUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isValid, validatedData, error } = await validateListUsersData(
    req.body
  );

  if (!isValid && !validatedData) {
    return res.status(400).json({ path: error?.path, message: error?.message });
  }

  try {
    const users = await userService.listUsers(
      validatedData?.pageSize ?? DEFAULT_PAGE_SIZE,
      validatedData?.pageIndex ?? DEFAULT_PAGE_INDEX
    );
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};
