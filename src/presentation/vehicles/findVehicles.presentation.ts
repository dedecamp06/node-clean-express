import {
  successResponse,
  errorResponse,
} from "../shared/https";
import { vehicleRepository } from "../../infra/mongodb/repositories/vehicles.repositores";

class FindVehiclesPresentation {
  constructor() {}

  async index() {
    try {
      const result = await vehicleRepository.find();
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}

export const FindVehiclesPresentationIndex = new FindVehiclesPresentation();
