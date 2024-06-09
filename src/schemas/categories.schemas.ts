import { z } from "zod";
import { baseMenuItemSchema } from "./menuItem.schemas";

export const baseCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  menuItems: z.array(baseMenuItemSchema),
});

export const createCategorySchema = baseCategorySchema.omit({
  id: true,
  menuItems: true,
});
