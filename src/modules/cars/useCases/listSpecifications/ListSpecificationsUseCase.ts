import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute() {
    const all = this.specificationRepository.list();
    return all;
  }
}

export { ListSpecificationsUseCase };
