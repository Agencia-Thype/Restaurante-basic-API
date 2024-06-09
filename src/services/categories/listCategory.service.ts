import { prisma } from "../../app";

export const listCategoryService = async () => {
  const categories = await prisma.category.findMany();

  return categories;
};
  