import { z } from "zod";
import {
  createOrderSchema,
  updateOrderSchema,
} from "../schemas/orders.schemas";

export type ICreateOrder = z.infer<typeof createOrderSchema>;

export type IUpdateStatus = z.infer<typeof updateOrderSchema>;
