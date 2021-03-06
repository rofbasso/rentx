"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationRoutes = void 0;
var express_1 = require("express");
var CreateSpecificationController_1 = require("../../../../modules/cars/useCases/createSpecification/CreateSpecificationController");
var ListSpecificationsController_1 = require("../../../../modules/cars/useCases/listSpecifications/ListSpecificationsController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var specificationRoutes = (0, express_1.Router)();
exports.specificationRoutes = specificationRoutes;
var createSpecificationController = new CreateSpecificationController_1.CreateSpecficationController();
var listSpecificationsController = new ListSpecificationsController_1.ListSpecificationsController();
specificationRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createSpecificationController.handle);
specificationRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, listSpecificationsController.handle);
