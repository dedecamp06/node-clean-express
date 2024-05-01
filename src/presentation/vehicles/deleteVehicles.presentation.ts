import { successResponse, errorResponse } from "../shared/https";
import { vehicleRepository } from "../../infra/mongodb/repositories/vehicles.repositores";

class DeleteVehiclesPresentation {
  constructor() {}

  async index(id: string) {
    try {
      const result = await vehicleRepository.delete(id);
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}

export const DeleteVehiclesPresentationIndex = new DeleteVehiclesPresentation();
