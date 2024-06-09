import { prisma } from "../../app";
import { AppError } from "../../errors";
import { createCategory } from "../../interfaces/categories.interfaces";

export const createCategoryService = async (data: createCategory) => {
  const category = await prisma.category.findFirst({
    where: {
      name: data.name,
    },
  });

  if (category) {
    return new AppError("Categoria já existe", 409);
  }

  const newCategory = await prisma.category.create({
    data,
  });

  return newCategory;
};
