import { prisma } from "../../app";
import { AppError } from "../../errors";
import { ILoginData } from "../../interfaces/login.interfaces";
import { compareSync } from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const loginService = async (data: ILoginData) => {
  const { email, password } = data;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Usuário ou senha inválidos", 401);
  }

  const verifyPassword = compareSync(password, user.password);

  if (!verifyPassword) {
    throw new AppError("Usuário ou senha inválidos", 401);
  }

  const token = jwt.sign(
    {
      isAdmin: user.isAdmin,
      email: user.email,
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return { token, isAdmin: user.isAdmin };
};
