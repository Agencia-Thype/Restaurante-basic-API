import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import { AppError } from "../errors";

export const ensureUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, userId } = req.body;

  let user;
  if (email) {
    user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      throw new AppError("E-mail já cadastrado", 409);
    }

    next();
  } else if (userId) {
    user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError("Usuario não existe", 404);
    }

    next();
  }
};
