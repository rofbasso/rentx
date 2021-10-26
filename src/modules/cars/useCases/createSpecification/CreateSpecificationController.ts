import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUsecase } from "./CreateSpecificationUseCase";

class CreateSpecficationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUsecase
    );

    await createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecficationController };
