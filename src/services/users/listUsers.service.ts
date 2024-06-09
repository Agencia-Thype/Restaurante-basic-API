import { prisma } from "../../app";
import { listUsersSchema } from "../../schemas/users.schemas";

export const listUsersService = async () => {
  const listUsers = await prisma.user.findMany({
    include: {
      addresses: true,
    },
  });

  return listUsersSchema.parse(listUsers);
};
