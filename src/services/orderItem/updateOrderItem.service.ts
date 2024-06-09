import { OrderItem } from "@prisma/client";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const updateOrderItemService = async (id: string, data: OrderItem) => {
  const orderItem = await prisma.orderItem.findUnique({
    where: {
      id,
    },
  });

  if (!orderItem) {
    throw new AppError("Item não encontrado", 404);
  }

  const updatedItem = await prisma.orderItem.update({
    where: {
      id,
    },
    data,
  });

  return updatedItem;
};
