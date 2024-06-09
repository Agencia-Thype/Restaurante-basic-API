import { z } from "zod";
import { baseOrderItem, createOrderItem } from "./orderItems.schemas";

export const baseOrderSchema = z.object({
  id: z.string(),
  orderNumber: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  paymentMethod: z.string(),
  deliveryAddress: z.string(),
  orderConfirm: z.boolean(),
  confirmDelivery: z.boolean(),
  finishedOrder: z.boolean(),
  userId: z.string(),
  orderItems: z.array(baseOrderItem),
});

export const createOrderSchema = baseOrderSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    orderConfirm: true,
    finishedOrder: true,
    confirmDelivery: true,
  })
  .extend({
    orderItems: z.array(createOrderItem),
  });

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
});

const addressSchema = z.object({
  id: z.string(),
  zip: z.string(),
  city: z.string(),
  state: z.string(),
  complement: z.string(),
  street: z.string(),
  preferred: z.boolean(),
});

const menuItemSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const orderItemSchema = z.object({
  id: z.string(),
  quantity: z.number(),
  total: z.number(),
  instructions: z.string(),
  menuItem: menuItemSchema,
});

export const orderDataSchema = z.object({
  id: z.string(),
  orderNumber: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  paymentMethod: z.string(),
  orderConfirm: z.boolean(),
  finishedOrder: z.boolean(),
  confirmDelivery: z.boolean(),
  orderItems: z.array(orderItemSchema),
  user: userSchema,
  deliveryAddress: addressSchema,
});

export const completeOrderSchema = z.array(orderDataSchema);

export const updateOrderSchema = z.object({
  orderId: z.string(),
  orderConfirm: z.boolean().optional(),
  finishedOrder: z.boolean().optional(),
  confirmDelivery: z.boolean().optional(),
});
