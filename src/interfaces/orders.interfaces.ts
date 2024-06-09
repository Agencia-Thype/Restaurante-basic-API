import { z } from "zod";
import {
  createOrderSchema,
  updateOrderSchema,
} from "../schemas/orders.schemas";
import { baseOrderItem } from "../schemas/orderItems.schemas";

export type ICreateOrder = z.infer<typeof createOrderSchema>;
export type ICreateBaseOrder = z.infer<typeof baseOrderItem>;

export type IUpdateStatus = z.infer<typeof updateOrderSchema>;
