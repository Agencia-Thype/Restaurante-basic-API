import { Request, Response } from "express";
import { createOrderService } from "../services/orders/createOrder.service";
import { listOrdersService } from "../services/orders/listOrders.service";
import { updateStatusOrderService } from "../services/orders/updateStatusOrder.service";
import { deleteOrderService } from "../services/orders/deleteOrder.service";
import { listOrderDetailService } from "../services/orders/listOrderDetail.service";

export const createOrderController = async (req: Request, res: Response) => {
  const data = req.body;

  const newOrder = await createOrderService(data);

  return res.json(newOrder);
};

export const listOrdersController = async (req: Request, res: Response) => {
  const listOrders = await listOrdersService();

  return res.json(listOrders);
};

export const listOrderDetailController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const orderDetail = await listOrderDetailService(id);

  return res.json(orderDetail);
};

export const updateOrderStatusController = async (
  req: Request,
  res: Response
) => {
  const data = req.body;

  const updateStatus = await updateStatusOrderService(data);

  return res.json(updateStatus);
};

export const deleteOrderController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteOrderService(id);

  return res.status(204).json({ menssage: "Usuario deletado com sucesso" });
};
