import { inject, injectable } from "tsyringe";

import { Specification } from "../../infra/typeorm/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specification = await this.specificationsRepository.list();

    return specification;
  }
}

export { ListSpecificationsUseCase };
