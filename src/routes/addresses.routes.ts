import { Router } from "express";
import { ensureTokenMiddleware } from "../middlewares/ensureToken.middleware";
import {
  createAddressController,
  updateAddressController,
} from "../controllers/addresses.controllers";

const routes = Router();

export const addressesRoutes = () => {
  routes.post("", ensureTokenMiddleware, createAddressController);

  routes.patch("/:id", ensureTokenMiddleware, updateAddressController);

  return routes;
};
