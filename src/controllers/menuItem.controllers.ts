import { Request, Response } from "express";
import { createMenuItemService } from "../services/menuItem/createMenuItem.service";
import { listMenuItensService } from "../services/menuItem/listMenuItens.service";
import { listMenuItemDetailService } from "../services/menuItem/listMenuItemDetail.service";
import { updateMenuItemService } from "../services/menuItem/updateMenuItem.service";
import { deleteMenuItemService } from "../services/menuItem/deleteMenuItem.service";

export const createMenuItemController = async (req: Request, res: Response) => {
  const data = req.body;

  const newItem = await createMenuItemService(data);

  res.status(201).json(newItem);
};

export const listMenuItemController = async (req: Request, res: Response) => {
  const query = req.query;

  const menuList = await listMenuItensService(query);

  return res.json(menuList);
};

export const listMenuItemDetailController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const menuItemDetail = await listMenuItemDetailService(id);

  return res.json(menuItemDetail);
};

export const updateMenuItemController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const updateMenuItem = await updateMenuItemService(data, id);

  return res.json(updateMenuItem);
};

export const deleteMenuItemController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteMenuItemService(id);

  res.status(204).json();
};
