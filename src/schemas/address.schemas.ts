import { z } from "zod";

export const baseAddressSchema = z.object({
  id: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  complement: z.string(),
  preferred: z.boolean(),
  userId: z.string(),
});

export const createAddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  complement: z.string(),
  preferred: z.boolean(),
});
