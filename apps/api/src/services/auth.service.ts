import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@models/user.model";


function signJWT(payload: { id: string }, secret: string): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn: "1h" }, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token!); 
      }
    });
  });
}

export class AuthService {
  async signup(userInput: any) {
    const hashedPassword = bcryptjs.hashSync(userInput.password, 10);
    const newUser = new User({ ...userInput, password: hashedPassword });
    await newUser.save();
    // Vytvoření JWT, odebrání citlivých dat, atd.
    return newUser;
  }

  async signin(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const isValidPassword = bcryptjs.compareSync(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid credentials");
    }
    const token = await signJWT({ id: user._id }, process.env.JWT_SECRET!);
    // Vrátí uživatele s tokenem, odebrání citlivých dat, atd.
    return { user, token };
  }

  async google(email: string, name: string, photoUrl: string) {
    let user = await User.findOne({ email });
    if (!user) {
      // Uživatel neexistuje, vytvoříme nového
      const newUser = new User({
        username:
          name.replace(/\s+/g, "").toLowerCase() +
          Math.random().toString(36).slice(-8),
        email: email,
        profilePicture: photoUrl,
      });
      await newUser.save();
      user = newUser;
    }
    const token = await signJWT({ id: user._id }, process.env.JWT_SECRET!);
    return { user, token };
  }
}
