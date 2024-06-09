import { prisma } from "../../app";
import { AppError } from "../../errors";
import { orderDataSchema } from "../../schemas/orders.schemas";

export const listOrderDetailService = async (id: string) => {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      orderItems: {
        include: {
          menuItem: true,
        },
      },
      user: true,
    },
  });

  if (!order) {
    throw new AppError("Pedido não existe", 404);
  }

  return orderDataSchema.parse(order);
};
