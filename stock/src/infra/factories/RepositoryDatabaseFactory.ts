import NoSqlDatabaseConnection from "../database/NoSqlDatabaseConnection";
import StockEntryRepository from "../../domain/repositories/StockEntryRepository";
import StockEntryRepositoryDatabase from "../repositories/StockEntryRepositoryDatabase";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class RepositoryDatabaseFactory implements RepositoryFactory {
	constructor(readonly connection: NoSqlDatabaseConnection) {}
	createStockEntryRepository(): StockEntryRepository {
		return new StockEntryRepositoryDatabase(this.connection);
	}
}
