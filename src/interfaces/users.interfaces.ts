import { z } from "zod";
import { createUserSchema } from "../schemas/users.schemas";

export type ICreateUser = z.infer<typeof createUserSchema>;
