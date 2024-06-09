import { ensureTokenMiddleware } from "./../middlewares/ensureToken.middleware";
import { Router } from "express";
import {
  listOrderItemDetailsController,
  listOrderItensController,
  updateOrderItemController,
} from "../controllers/orderItens.controllers";

const routes = Router();

export const orderItensRoutes = () => {
  routes.get("", ensureTokenMiddleware, listOrderItensController);

  routes.get("/:id", ensureTokenMiddleware, listOrderItemDetailsController);

  routes.patch("/:id", ensureTokenMiddleware, updateOrderItemController);

  return routes;
};
