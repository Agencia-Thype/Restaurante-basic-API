import { prisma } from "../../app";
import { AppError } from "../../errors";
import { createMenuItem } from "../../interfaces/menuItem.interfaces";

export const createMenuItemService = async (data: createMenuItem) => {
  const categoryExists = await prisma.category.findUnique({
    where: {
      id: data.categoryId,
    },
  });

  if (!categoryExists) {
    throw new AppError("Categoria inexistente", 404);
  }

  const newMenuItem = await prisma.menuItem.create({
    data,
    include: {
      category: true,
    },
  });

  return newMenuItem;
};
