import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const handleErrors = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return response.status(400).json({
      message: error.errors,
    });
  }

  console.log(error);
  return response.status(500).json({
    message: "Internal server error",
  });
};

export { AppError, handleErrors };
