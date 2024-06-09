import { Router } from "express";
import {
  createUserController,
  listUserDetailsController,
  listUserProfileController,
  listUsersController,
} from "../controllers/users.controller";

import { createUserSchema } from "../schemas/users.schemas";
import { ensureUserExists } from "../middlewares/ensureUserExists.middleware";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { ensureTokenMiddleware } from "../middlewares/ensureToken.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";

const routes = Router();

export const usersRoutes = () => {
  routes.post(
    "",
    validatedDataMiddleware(createUserSchema),
    ensureUserExists,
    createUserController
  );

  routes.get(
    "",
    ensureTokenMiddleware,
    ensureIsAdminMiddleware,
    listUsersController
  );

  routes.get("/profile", ensureTokenMiddleware, listUserProfileController);
  routes.get("/:id", ensureTokenMiddleware, listUserDetailsController);

  return routes;
};
