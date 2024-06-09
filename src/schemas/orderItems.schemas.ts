import { z } from "zod";
import { listMenuItemForOrder } from "./menuItem.schemas";

export const baseOrderItem = z.object({
  id: z.string(),
  quantity: z.number(),
  total: z.number(),
  instructions: z.string().optional(),
  orderId: z.string(),
  menuItemId: z.string(),
});

export const createOrderItem = baseOrderItem.omit({
  id: true,
  orderId: true,
});

export const orderItemForListOrder = baseOrderItem.extend({
  menuItem: listMenuItemForOrder
})
