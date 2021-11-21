"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSpecificationsController = void 0;

var _tsyringe = require("tsyringe");

var _ListSpecificationsUseCase = require("./ListSpecificationsUseCase");

class ListSpecificationsController {
  async handle(request, response) {
    const listSpecificationsUseCase = _tsyringe.container.resolve(_ListSpecificationsUseCase.ListSpecificationsUseCase);

    const all = await listSpecificationsUseCase.execute();
    return response.json(all);
  }

}

exports.ListSpecificationsController = ListSpecificationsController;