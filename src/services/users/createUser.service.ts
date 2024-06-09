import { hashSync } from "bcryptjs";
import { ICreateUser } from "../../interfaces/users.interfaces";
import { prisma } from "../../app";
import { returnCreateUserSchema } from "../../schemas/users.schemas";

export const createUserService = async (data: ICreateUser) => {
  const { addresses, password } = data;

  const hashedPassword = hashSync(password, 10);

  const newUser = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
      addresses: {
        create: addresses.map((address) => {
          return {
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip,
            complement: address.complement,
            preferred: address.preferred ? address.preferred : false,
          };
        }),
      },
    },
    include: {
      addresses: true,
    },
  });

  return returnCreateUserSchema.parse(newUser);
};
