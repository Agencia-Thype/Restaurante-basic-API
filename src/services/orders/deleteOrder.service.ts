import { prisma } from "../../app";
import { AppError } from "../../errors";

export const deleteOrderService = async (id: string) => {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
  });

  if (!order) {
    throw new AppError("Pedido não existe", 404);
  }

  await prisma.order.delete({
    where: {
      id,
    },
  });

  return true;
};
