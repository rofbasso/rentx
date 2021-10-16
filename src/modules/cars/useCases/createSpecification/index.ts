import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecficationController } from "./CreateSpecificationController";
import { CreateSpecificationUsecase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUsecase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecficationController(
  createSpecificationUseCase
);

export { createSpecificationController };
