import { z } from "zod";
import { baseLoginSchema } from "../schemas/login.schemas";

export type ILoginData = z.infer<typeof baseLoginSchema>;
