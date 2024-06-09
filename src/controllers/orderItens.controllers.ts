import { Request, Response } from "express";
import { listOrderItensService } from "../services/orderItem/listOrderItens.service";
import { listOrderItemDetailsService } from "../services/orderItem/listOrderItemDetails.service";
import { updateOrderItemService } from "../services/orderItem/updateOrderItem.service";

export const listOrderItensController = async (req: Request, res: Response) => {
  const listOrderItens = await listOrderItensService();

  return res.json(listOrderItens);
};

export const listOrderItemDetailsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const orderItemDetails = await listOrderItemDetailsService(id);

  return res.json(orderItemDetails);
};

export const updateOrderItemController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const data = req.body;

  const updatedItem = await updateOrderItemService(id, data);

  return res.json(updatedItem);
};
