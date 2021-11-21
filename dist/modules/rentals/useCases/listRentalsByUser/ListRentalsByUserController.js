"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListRentalsByUserCaseController = void 0;

var _tsyringe = require("tsyringe");

var _ListRentalsByUserUseCase = require("./ListRentalsByUserUseCase");

class ListRentalsByUserCaseController {
  async handle(request, response) {
    const {
      id
    } = request.user;

    const listRentalsByUserUseCase = _tsyringe.container.resolve(_ListRentalsByUserUseCase.ListRentalsByUserUseCase);

    const rentals = await listRentalsByUserUseCase.execute(id);
    return response.json(rentals);
  }

}

exports.ListRentalsByUserCaseController = ListRentalsByUserCaseController;