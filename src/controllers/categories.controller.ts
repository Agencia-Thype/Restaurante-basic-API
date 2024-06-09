import { Request, Response } from "express";
import { createCategoryService } from "../services/categories/createCategory.service";
import { listCategoryService } from "../services/categories/listCategory.service";

export const createCategoryController = async (req: Request, res: Response) => {
  const data = req.body;

  const newCategory = await createCategoryService(data);

  return res.status(201).json(newCategory);
};

export const listCategoriesController = async (req: Request, res: Response) => {
  const categoriesList = await listCategoryService();

  return res.json(categoriesList);
};
