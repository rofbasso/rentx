import { inject, injectable } from "tsyringe";

import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUsecase {
  constructor(
    @inject(SpecificationRepository)
    private specificationsRepository: SpecificationRepository
  ) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUsecase };
