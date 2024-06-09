import { z } from "zod";

export const baseLoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});
