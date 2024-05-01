import {
  CreateVehiclesPresentationIndex,
  FindVehiclesPresentationIndex,
  FindOneVehiclesPresentationIndex,
  DeleteVehiclesPresentationIndex,
  UpdateVehiclesPresentationIndex,
} from "../../presentation/vehicles";
import { Request, Response } from "express";

export class FindVehicleController {
  async get(req: Request, res: Response) {
    const result = await FindVehiclesPresentationIndex.index();
    return res.status(result.status).json(result);
  }

  async post(req: Request, res: Response) {
    const body = req.body;
    const result = await CreateVehiclesPresentationIndex.index(body);
    return res.status(result.status).json(result);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await FindOneVehiclesPresentationIndex.index(id);
    return res.status(result.status).json(result);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await DeleteVehiclesPresentationIndex.index(id);
    return res.status(result.status).json(result);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    const result = await UpdateVehiclesPresentationIndex.index(id, body);
    return res.status(result.status).json(result);
  }
}
