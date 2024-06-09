import { prisma } from "../../app";
import { AppError } from "../../errors";
import { ICreateBaseAddress } from "../../interfaces/addresses.interfaces";
export const updateAddressService = async (
  data: ICreateBaseAddress,
  addressId: string
) => {
  const address = await prisma.address.findUnique({
    where: {
      id: addressId,
    },
  });

  if (!address) {
    throw new AppError("Endereço não encontrado", 404);
  }

  const updatedAddress = await prisma.address.update({
    where: {
      id: addressId,
    },
    data,
  });

  return updatedAddress;
};
