import StockEntry from "../../domain/entities/StockEntry";
import StockEntryRepository from "../../domain/repositories/StockEntryRepository";
import NoSqlDatabaseConnection from "../database/NoSqlDatabaseConnection";

export default class StockEntryRepositoryDatabase implements StockEntryRepository {
	constructor(readonly connection: NoSqlDatabaseConnection) {}

	async get(idProduct: string): Promise<StockEntry[]> {
		const stockEntriesData = await this.connection.get("StockEntries", { idProduct: parseInt(idProduct) });
		const stockEntries = [];
		for (const stockEntryData of stockEntriesData) {
			stockEntries.push(
				new StockEntry(stockEntryData.idProduct, stockEntryData.operation, stockEntryData.quantity)
			);
		}
		return stockEntries;
	}

	async save(stockEntry: StockEntry): Promise<void> {
		await this.connection.insert("StockEntries", {
			idProduct: stockEntry.idProduct,
			operation: stockEntry.operation,
			quantity: stockEntry.quantity,
		});
	}
}
