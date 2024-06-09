import { z } from "zod";
import { baseOrderSchema, orderDataSchema } from "./orders.schemas";
import { baseAddressSchema, createAddressSchema } from "./address.schemas";

export const baseUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  isAdmin: z.boolean(),
  addresses: z.array(baseAddressSchema),
  orders: z.array(baseOrderSchema),
});

export const usersListDataWithNoPassword = baseUserSchema.omit({
  password: true,
  orders: true,
});

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phoneNumber: z
    .string()
    .regex(
      /^\d{2}[\s\-()]*\d{4,5}[\s\-()]*(\d{4})$/,
      "Número de telefone inválido"
    ),

  isAdmin: z.boolean(),
  addresses: z
    .array(createAddressSchema)
    .nonempty("At least one address is required"),
});

export const returnCreateUserSchema = baseUserSchema.omit({
  password: true,
  orders: true,
});

export const listUsersSchema = z.array(usersListDataWithNoPassword);

export const listUserDetailsSchema = baseUserSchema
  .omit({
    password: true,
  })
  .extend({
    orders: z.array(orderDataSchema),
  });
