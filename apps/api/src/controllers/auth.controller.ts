import { Request, Response, NextFunction } from "express";
import { AuthService } from "@services/auth.service";
import { userSchema } from "src/dtoIns/userInput.dto";

const authService = new AuthService();

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userSchema.validate(req.body, { abortEarly: false });
  } catch (e) {
    res.status(400).json({ error: e });
  }

  try {
    const userInput = req.body;
    const user = await authService.signup(userInput);

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    
    const userWithToken = await authService.signin(email, password);
    res.status(200).json(userWithToken);
  } catch (error) {
    next(error);
  }
};

export const google = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, photoUrl } = req.body;
    const userWithToken = await authService.google(email, name, photoUrl);
    res.status(200).json(userWithToken);
  } catch (error) {
    next(error);
  }
};

export const signout = (_: Request, res: Response) => {
  res.clearCookie("access_token").status(200).json("Signout success!");
  res.status(200).json({ message: "You have been signed out" });
};
