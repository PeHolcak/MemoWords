import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectToDatabase = (): void => {
  mongoose.connect(process.env.DATABASE_URL!)
    .then(() => console.info('Connected to MongoDB'))
    .catch((err: Error) => console.error(err));
};