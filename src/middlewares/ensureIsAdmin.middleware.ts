import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const ensureIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdmin } = req.user;

  if (!isAdmin) {
    throw new AppError("Missing Credentials", 403);
  }

  next();
};
