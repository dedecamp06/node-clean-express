import {
  createdResponse,
  errorResponse,
  badRequestResponse,
} from "../shared/https";
import { VehiclesInterface } from "../../domain/interface";
import { vehicleRepository } from "../../infra/mongodb/repositories/vehicles.repositores";

class CreateVehiclesPresentation {
  constructor() {}

  async index(params: VehiclesInterface) {
    try {
      if (!params || Object.keys(params).length === 0) {
        return badRequestResponse("Params is not found!");
      }
      const result = await vehicleRepository.create(params);
      return createdResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}

export const CreateVehiclesPresentationIndex = new CreateVehiclesPresentation();
