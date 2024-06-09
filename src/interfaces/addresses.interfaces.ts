import { z } from "zod";
import { createAddressSchema } from "../schemas/address.schemas";


export type ICreateAddress = z.infer<typeof createAddressSchema>;
