import StockCalculator from "../../domain/domainServives/StockCalculator";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import StockEntryRepository from "../../domain/repositories/StockEntryRepository";

export default class GetStock {
	stockEntryRepository: StockEntryRepository;

	constructor(repositoryFactory: RepositoryFactory) {
		this.stockEntryRepository = repositoryFactory.createStockEntryRepository();
	}

	async execute(idProduct: string): Promise<number> {
		const stockEntries = await this.stockEntryRepository.get(idProduct);
		const total = StockCalculator.calculate(stockEntries);
		return total;
	}
}
