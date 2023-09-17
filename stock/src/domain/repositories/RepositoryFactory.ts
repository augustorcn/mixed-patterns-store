import StockEntryRepository from "./StockEntryRepository";

export default interface RepositoryFactory {
	createStockEntryRepository(): StockEntryRepository;
}
