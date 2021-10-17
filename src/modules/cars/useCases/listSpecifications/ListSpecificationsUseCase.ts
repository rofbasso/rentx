import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}
  async execute(): Promise<Specification[]> {
    const all = await this.specificationRepository.list();
    return all;
  }
}

export { ListSpecificationsUseCase };
