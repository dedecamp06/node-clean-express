import {
  successResponse,
  errorResponse,
  noCotentResponse,
  badRequestResponse,
} from "../shared/https";
import { vehicleRepository } from "../../infra/mongodb/repositories/vehicles.repositores";
import { VehiclesInterface } from "../../domain/interface";

class UpdateVehiclesPresentation {
  constructor() {}

  async index(id: string, params: VehiclesInterface) {
    try {
      if (!params || Object.keys(params).length === 0) {
        return badRequestResponse("Params is not found!");
      }

      const result = await vehicleRepository.update(id, params);
      if (!result) {
        return noCotentResponse();
      }
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}

export const UpdateVehiclesPresentationIndex = new UpdateVehiclesPresentation();
