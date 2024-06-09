import { Router } from "express";
import {
  createOrderController,
  deleteOrderController,
  listOrderDetailController,
  listOrdersController,
  updateOrderStatusController,
} from "../controllers/orders.controllers";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { updateOrderSchema } from "../schemas/orders.schemas";
import { ensureTokenMiddleware } from "../middlewares/ensureToken.middleware";
import { createOrderSchema } from "../schemas/orders.schemas";
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";

const routes = Router();

export const ordersRoutes = () => {
  routes.post(
    "",
    ensureTokenMiddleware,
    validatedDataMiddleware(createOrderSchema),
    createOrderController
  );
  routes.get(
    "",
    ensureTokenMiddleware,
    ensureIsAdminMiddleware,
    listOrdersController
  );
  routes.get("/:id", ensureTokenMiddleware, listOrderDetailController);
  routes.patch(
    "/statusOrder",
    ensureTokenMiddleware,
    ensureIsAdminMiddleware,
    validatedDataMiddleware(updateOrderSchema),
    updateOrderStatusController
  );
  routes.delete("/:id", ensureTokenMiddleware, deleteOrderController);

  return routes;
};
