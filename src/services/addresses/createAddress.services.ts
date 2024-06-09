import { Address } from "@prisma/client";
import { prisma } from "../../app";
import { AppError } from "../../errors";

export const createAddressService = async (data: Address) => {
  const { userId } = data;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("Usuario não encontrado", 404);
  }

  const newAddress = await prisma.address.create({
    
    data,
  });

  return newAddress;
};
