import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import * as jwt from "jsonwebtoken";

export const ensureTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Token is missing", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        console.log(error);
        throw new AppError("Invalid Token", 400);
      }

      req.user = {
        email: decoded.email,
        id: decoded.id,
        isAdmin: decoded.isAdmin,
      };
    }
  );
  next();
};
