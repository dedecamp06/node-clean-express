import { Router } from "express";
import { FindVehicleController } from "../controller/vehicles.controller";

const routes = Router();
const vehiclesController = new FindVehicleController();

const prefix = "/api";

routes.get(`${prefix}/vehicles`, vehiclesController.get);
routes.get(`${prefix}/vehicles/:id`, vehiclesController.getOne);
routes.post(`${prefix}/vehicles`, vehiclesController.post);
routes.patch(`${prefix}/vehicles/:id`, vehiclesController.update);
routes.delete(`${prefix}/vehicles/:id`, vehiclesController.delete);

export { routes };
