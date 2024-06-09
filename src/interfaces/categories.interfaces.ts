import { z } from "zod";
import { createCategorySchema } from "../schemas/categories.schemas";

export type createCategory = z.infer<typeof createCategorySchema>;
