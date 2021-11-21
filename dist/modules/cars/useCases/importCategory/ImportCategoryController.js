"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportCategoryController = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../shared/infra/http/errors/AppError");

var _ImportCategoryUseCase = require("./ImportCategoryUseCase");

class ImportCategoryController {
  async handle(request, response) {
    const {
      file
    } = request;

    if (!file) {
      throw new _AppError.AppError("Can not read file!");
    }

    const importCategoryUseCase = _tsyringe.container.resolve(_ImportCategoryUseCase.ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);
    return response.status(201).send();
  }

}

exports.ImportCategoryController = ImportCategoryController;