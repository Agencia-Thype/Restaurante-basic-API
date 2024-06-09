import { prisma } from "../../app";
import { AppError } from "../../errors";

export const listMenuItemDetailService = async (id: string) => {
  const menuItem = await prisma.menuItem.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      orderItems: true,
    },
  });

  if (!menuItem) {
    throw new AppError("Item não encontrado", 404);
  }

  return menuItem;
};
