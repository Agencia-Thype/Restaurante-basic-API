import { prisma } from "../../app";
import { completeOrderSchema } from "../../schemas/orders.schemas";

export const listOrdersService = async () => {
  const listOrders = await prisma.order.findMany({
    include: {
      orderItems: {
        include: {
          menuItem: true,
        },
      },
      user: true,
    },
  });

  return completeOrderSchema.parse(listOrders);
};
