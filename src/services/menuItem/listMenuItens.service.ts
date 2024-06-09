import { prisma } from "../../app";
import { AppError } from "../../errors";

export const listMenuItensService = async ({ category }: any) => {
  let whereClause = {};
  if (category) {
    const findCategory = await prisma.category.findFirst({
      where: {
        name: category,
      },
    });

    if (!findCategory) {
      throw new AppError("Categoria não existente", 404);
    }

    whereClause = { categoryId: findCategory.id };
  }

  const menuList = await prisma.menuItem.findMany({
    where: whereClause,
    include: {
      category: true,
    },
  });

  return menuList;
};
