import { Request, Response } from "express";

import { CreateSpecificationUsecase } from "./CreateSpecificationUseCase";

class CreateSpecficationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUsecase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecficationController };
