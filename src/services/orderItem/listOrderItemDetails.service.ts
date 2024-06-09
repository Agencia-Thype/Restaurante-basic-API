import { prisma } from "../../app";
import { AppError } from "../../errors";

export const listOrderItemDetailsService = async (id: string) => {

  const orderItem = await prisma.orderItem.findUnique({
    where: {
      id,
    },
    include: {
      menuItem: true,
      order: true,
    },
  });

  if (!orderItem) {
    throw new AppError("Item não encontrado", 404);
  }

  return orderItem;
};
