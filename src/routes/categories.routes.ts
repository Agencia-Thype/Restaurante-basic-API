import { Router } from "express";
import {
  createCategoryController,
  listCategoriesController,
} from "../controllers/categories.controller";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { createCategorySchema } from "../schemas/categories.schemas";
import { ensureTokenMiddleware } from "../middlewares/ensureToken.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";

const routes = Router();

export const categoriesRoutes = () => {
  routes.post(
    "",
    ensureTokenMiddleware,
    ensureIsAdminMiddleware,
    validatedDataMiddleware(createCategorySchema),
    createCategoryController
  );
  routes.get("", listCategoriesController);

  return routes;
};
