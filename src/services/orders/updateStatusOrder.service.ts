import { prisma } from "../../app";
import { AppError } from "../../errors";
import { IUpdateStatus } from "../../interfaces/orders.interfaces";

export const updateStatusOrderService = async (data: IUpdateStatus) => {
  const order = await prisma.order.findUnique({
    where: {
      id: data.orderId,
    },
  });

  if (!order) {
    throw new AppError("Pedido não encontrado", 404);
  }

  const updateData = {
    ...(data.orderConfirm !== undefined
      ? { orderConfirm: data.orderConfirm }
      : {}),
    ...(data.finishedOrder !== undefined
      ? { finishedOrder: data.finishedOrder }
      : {}),
    ...(data.confirmDelivery !== undefined
      ? { confirmDelivery: data.confirmDelivery }
      : {}),
  };

  const updateOrder = await prisma.order.update({
    where: {
      id: data.orderId,
    },
    data: updateData,
  });

  return updateOrder;
};
