import DistanceCalculator from "../../domain/domainServices/DistanceCalculator";
import FreightCalculator from "../../domain/domainServices/FreightCalculator";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import ZipcodeRepository from "../../domain/repositories/ZipcodeRepository";

export default class SimulateFreight {
	zipcodeRepository: ZipcodeRepository;
	constructor(repositoryFactory: RepositoryFactory) {
		this.zipcodeRepository = repositoryFactory.createZipcodeRepository();
	}

	async execute(input: Input): Promise<Output> {
		let output: Output = {
			freight: 0,
		};

		for (const item of input.itens) {
			if (input.from && input.to) {
				const from = await this.zipcodeRepository.get(input.from);
				const to = await this.zipcodeRepository.get(input.to);
				let dinstance = 1000;
				if (from && to) {
					dinstance = DistanceCalculator.calculate(from.coordinate, to.coordinate);
				}
				const freight = FreightCalculator.calculate(dinstance, item.volume, item.density);
				output.freight += freight * item.quantity;
			}
		}
		return output;
	}
}

type Input = {
	itens: { volume: number; density: number; quantity: number }[];
	from: string;
	to: string;
};

type Output = {
	freight: number;
};
