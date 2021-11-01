import { Specification } from "../../infra/typeorm/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specification[] = [];
  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specifications = new Specification();

    Object.assign(specifications, {
      description,
      name,
    });

    this.specifications.push(specifications);

    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification as Specification;
  }

  async list(): Promise<Specification[]> {
    throw new Error("Method not implemented.");
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );

    return allSpecifications;
  }
}

export { SpecificationsRepositoryInMemory };
