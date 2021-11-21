"use strict";

var _AppError = require("../../../../shared/infra/http/errors/AppError");

var _CarsRepositoryInMemory = require("../../repositories/in-memory/CarsRepositoryInMemory");

var _SpecificationsRepositoryInMemory = require("../../repositories/in-memory/SpecificationsRepositoryInMemory");

var _CreateCarSpecificationUseCase = require("./CreateCarSpecificationUseCase");

let createCarSpecificationUseCase;
let carsRepositoryInMemory;
let specificationsRepositoryInMemory;
describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new _SpecificationsRepositoryInMemory.SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new _CreateCarSpecificationUseCase.CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationsRepositoryInMemory);
  });
  it("should not be able to add a new specification to non-existent car", async () => {
    const car_id = "1234";
    const specifications_id = ["54321"];
    await expect(createCarSpecificationUseCase.execute({
      car_id,
      specifications_id
    })).rejects.toEqual(new _AppError.AppError("Car does not exists!"));
  });
  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name car",
      description: "Description car",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 100,
      brand: "Brand",
      category_id: "0645c2c2-4cb2-41bc-bb7b-986457bf16d2"
    });
    const specification = await specificationsRepositoryInMemory.create({
      description: "test",
      name: "test"
    });
    const specifications_id = [specification.id];
    const specitificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id
    });
    expect(specitificationsCars).toHaveProperty("specifications");
    expect(specitificationsCars.specifications.length).toBe(1);
  });
});