import StockEntry from "../../domain/entities/StockEntry";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import StockEntryRepository from "../../domain/repositories/StockEntryRepository";

export default class DecreaseStock {
	stockEntryRepository: StockEntryRepository;

	constructor(repositoryFactory: RepositoryFactory) {
		this.stockEntryRepository = repositoryFactory.createStockEntryRepository();
	}

	async execute(input: Input): Promise<void> {
		for (const item of input.items) {
			const stockEntry = new StockEntry(item.idProduct, "out", item.quantity);
			await this.stockEntryRepository.save(stockEntry);
		}
	}
}

type Input = {
	items: { idProduct: number; quantity: number }[];
};
