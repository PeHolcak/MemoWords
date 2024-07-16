import { Request, Response, NextFunction } from 'express';
import { createError } from '@utils/error';

export const checkUserPermission = (req: Request, _: Response, next: NextFunction) => {
  if (req.user?.id !== req.params.id) {
    return next(createError(401, 'You are not allowed to perform this action!'));
  }
  next();
};