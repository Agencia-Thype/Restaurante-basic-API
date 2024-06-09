import { Router } from "express";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { createMenuItemSchema } from "../schemas/menuItem.schemas";
import {
  createMenuItemController,
  deleteMenuItemController,
  listMenuItemController,
  listMenuItemDetailController,
  updateMenuItemController,
} from "../controllers/menuItem.controllers";
import { ensureTokenMiddleware } from "../middlewares/ensureToken.middleware";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";
import { MenuItemUpdateInputSchema } from "../schemas/menuItem.schemas";

const routes = Router();

export const menuItemRoutes = () => {
  routes.post(
    "",
    ensureTokenMiddleware,
    ensureIsAdminMiddleware,
    validatedDataMiddleware(createMenuItemSchema),
    createMenuItemController
  );
  routes.get("", listMenuItemController);
  routes.get("/:id", listMenuItemDetailController);
  routes.patch(
    "/:id",
    ensureTokenMiddleware,
    ensureIsAdminMiddleware,
    validatedDataMiddleware(MenuItemUpdateInputSchema),
    updateMenuItemController
  );
  routes.delete(
    "/:id",
    ensureTokenMiddleware,
    ensureIsAdminMiddleware,
    deleteMenuItemController
  );

  return routes;
};
