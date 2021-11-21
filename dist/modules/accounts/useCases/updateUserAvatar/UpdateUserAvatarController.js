"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserAvatarController = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../shared/infra/http/errors/AppError");

var _UpdateUserAvatarUseCase = require("./UpdateUserAvatarUseCase");

class UpdateUserAvatarController {
  async handle(request, response) {
    const {
      id
    } = request.user;

    if (!request.file) {
      throw new _AppError.AppError("File undefined");
    }

    const avatar_file = request.file.filename;

    const updateUserAvatarUseCase = _tsyringe.container.resolve(_UpdateUserAvatarUseCase.UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({
      user_id: id,
      avatar_file
    });
    return response.status(204).send();
  }

}

exports.UpdateUserAvatarController = UpdateUserAvatarController;