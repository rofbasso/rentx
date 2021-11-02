import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "../../../../shared/infra/http/errors/AppError";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    if (!file) {
      throw new AppError("Can not read file!");
    }

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
