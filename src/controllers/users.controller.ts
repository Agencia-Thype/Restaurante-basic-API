import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { listUserDetailsService } from "../services/users/listUserDetail.service";

export const createUserController = async (req: Request, res: Response) => {
  const data = req.body;

  const newUser = await createUserService(data);

  return res.status(201).json(newUser);
};

export const listUsersController = async (req: Request, res: Response) => {
  const listUsers = await listUsersService();

  return res.json(listUsers);
};

export const listUserDetailsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const userDetails = await listUserDetailsService(id);

  return res.json(userDetails);
};

export const listUserProfileController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.user;

  const userProfile = await listUserDetailsService(id);

  return res.json(userProfile);
};
