import { prisma } from "../../app";
import { AppError } from "../../errors";
import { ICreateOrder } from "../../interfaces/orders.interfaces";

export const createOrderService = async (orderData: ICreateOrder) => {
  const { userId, orderItems } = orderData;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("Usuario não encontrado", 404);
  }

  orderItems.forEach(async (item) => {
    const menuItem = await prisma.menuItem.findUnique({
      where: {
        id: item.menuItemId,
      },
    });

    if (!menuItem) {
      throw new AppError("Item não encontrado", 404);
    }
  });

  const address = await prisma.address.findFirst({
    where: {
      id: orderData.deliveryAddress,
    },
  });

  if (!address) {
    throw new AppError("Endereço não existe", 404);
  }

  const { deliveryAddress, ...rest } = orderData;

  const newOrder = await prisma.order.create({
    data: {
      ...rest,
      deliveryAddress: address,
      orderItems: {
        create: orderData.orderItems.map((item) => ({
          menuItem: { connect: { id: item.menuItemId } },
          quantity: item.quantity,
          total: item.total,
          instructions: item.instructions || "",
        })),
      },
    },
  });

  return newOrder;
};
