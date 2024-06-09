import { prisma } from "../../app";
import { AppError } from "../../errors";
import { createBaseMenuItem } from "../../interfaces/menuItem.interfaces";


export const updateMenuItemService = async (
  data: createBaseMenuItem,
  menuItemId: string
) => {
  const menuItem = await prisma.menuItem.findUnique({
    where: {
      id: menuItemId,
    },
  });

  if (!menuItem) {
    throw new AppError("Item não existe", 404);
  }
  if (data.categoryId) {
    const category = await prisma.category.findUnique({
      where: {
        id: data.categoryId,
      },
    });

    if (!category) {
      throw new AppError("Categoria não existe", 404);
    }
  }

  const updatedItem = await prisma.menuItem.update({
    data,
    where: {
      id: menuItemId,
    },
  });

  return updatedItem;
};
