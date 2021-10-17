import { Router } from "express";

import { CreateSpecficationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecficationController();

specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationRoutes };
