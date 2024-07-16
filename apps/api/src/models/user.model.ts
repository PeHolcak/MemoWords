import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
  name: string;
  suername: string;
  age: number;
  bio?: string;
  location: {
    type: string;
    coordinates: number[];
  };
  photos: string[];
  preferences: {
    ageRange: [number, number];
    maxDistance: number;
  };
  email: string;
  password: string;
}

export type IUserDocument = Document & IUser;

const userSchema: Schema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    bio: String,
    location: {
      type: { type: String, default: 'Point' },
      coordinates: { type: [Number], required: true },
    },
    photos: [String],
    preferences: {
      ageRange: { type: [Number], required: true },
      maxDistance: { type: Number, required: true },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.index({ location: '2dsphere' });

const User = mongoose.model<IUserDocument>("User", userSchema);

export default User;

