import StockEntry from "../../domain/entities/StockEntry";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import StockEntryRepository from "../../domain/repositories/StockEntryRepository";

export default class FakeRepositoryFactory implements RepositoryFactory {
	createStockEntryRepository(): StockEntryRepository {
		const stockEntries: StockEntry[] = [new StockEntry(1, "in", 1), new StockEntry(1, "in", 2)];

		const stockEntryRepository = {
			async save(stockEntry: StockEntry): Promise<void> {},
			async get(idProduct: string): Promise<StockEntry[]> {
				const entries = stockEntries.filter((stockEntry) => stockEntry.idProduct == parseInt(idProduct));
				return entries;
			},
		};
		return stockEntryRepository;
	}
}
