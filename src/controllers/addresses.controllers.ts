import { Request, Response } from "express";
import { createAddressService } from "../services/addresses/createAddress.services";
import { updateAddressService } from "../services/addresses/updateAddress.service";

export const createAddressController = async (req: Request, res: Response) => {
  const data = req.body;

  const newAddress = await createAddressService(data);

  return res.json({ newAddress });
};

export const updateAddressController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;

  const updatedAddress = await updateAddressService(data, id);

  return res.json(updatedAddress);
};
