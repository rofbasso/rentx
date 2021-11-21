"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificationsRepositoryInMemory = void 0;

var _Specification = require("../../infra/typeorm/entities/Specification");

class SpecificationsRepositoryInMemory {
  constructor() {
    this.specifications = [];
  }

  async create({
    description,
    name
  }) {
    const specifications = new _Specification.Specification();
    Object.assign(specifications, {
      description,
      name
    });
    this.specifications.push(specifications);
    return specifications;
  }

  async findByName(name) {
    const specification = this.specifications.find(specification => specification.name === name);
    return specification;
  }

  async list() {
    throw new Error("Method not implemented.");
  }

  async findByIds(ids) {
    const allSpecifications = this.specifications.filter(specification => ids.includes(specification.id));
    return allSpecifications;
  }

}

exports.SpecificationsRepositoryInMemory = SpecificationsRepositoryInMemory;