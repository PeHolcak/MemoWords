import { Request, Response } from 'express';

export const createError = (err: any, _: Request, res: Response) => {
  const statusCode: number = err.statusCode || 500;
  const message: string = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, message, statusCode });
};