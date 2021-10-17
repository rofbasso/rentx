import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUsecase } from "./CreateSpecificationUseCase";

class CreateSpecficationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUsecase
    );

    createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecficationController };
