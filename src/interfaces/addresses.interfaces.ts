import { z } from "zod";
import { baseAddressSchema, createAddressSchema } from "../schemas/address.schemas";


export type ICreateAddress = z.infer<typeof createAddressSchema>;
export type ICreateBaseAddress = z.infer<typeof baseAddressSchema>;
