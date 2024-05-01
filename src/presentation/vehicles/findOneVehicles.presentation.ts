import {
  successResponse,
  errorResponse,
  noCotentResponse,
} from "../shared/https";
import { vehicleRepository } from "../../infra/mongodb/repositories/vehicles.repositores";

class FindOneVehiclesPresentation {
  constructor() {}

  async index(id: string) {
    try {
      const result = await vehicleRepository.findOne(id);
      if (!result) {
        return noCotentResponse();
      }
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}

export const FindOneVehiclesPresentationIndex =
  new FindOneVehiclesPresentation();
