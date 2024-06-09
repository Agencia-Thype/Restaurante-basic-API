import { prisma } from "../../app";
import { AppError } from "../../errors";
import { usersListDataWithNoPassword } from "../../schemas/users.schemas";

export const listUserDetailsService = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      addresses: true,
      orders: {
        include: {
          orderItems: {
            include: {
              menuItem: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw new AppError("Usuario não encontrado", 404);
  }

  const { password, ...rest } = user;
  return rest;
};
