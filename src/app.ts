import "express-async-errors";
import express, { Application, Request, Response } from "express";
import { handleErrors } from "./errors";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { appRoutes } from "./routes";

export const prisma = new PrismaClient();

const app: Application = express();

app.use(cors());

app.use(express.json());

appRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.use(handleErrors);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
