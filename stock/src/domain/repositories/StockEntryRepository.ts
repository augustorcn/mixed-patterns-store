import StockEntry from "../entities/StockEntry";

export default interface StockEntryRepository {
	get(idProduct: string): Promise<StockEntry[]>;
	save(stockEntry: StockEntry): Promise<void>;
}
