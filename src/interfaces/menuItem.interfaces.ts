import {
  MenuItemUpdateInputSchema,
  baseMenuItemSchema,
  createMenuItemSchema,
} from "./../schemas/menuItem.schemas";
import { z } from "zod";

export type createMenuItem = z.infer<typeof createMenuItemSchema>;
export type createBaseMenuItem = z.infer<typeof baseMenuItemSchema>;

export type MenuItemUpdateInputWithUndefined = z.infer<
  typeof MenuItemUpdateInputSchema
>;

export interface IMenuItemUpdate {
  name?: string;
  price?: number;
  imageURL?: string;
  description?: string;
  categoryId?: string;
}
