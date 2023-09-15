import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import ZipcodeRepository from "../../domain/repositories/ZipcodeRepository";
import DatabaseConnection from "../database/DatabaseConnection";
import ZipcodeRepositoryDatabase from "../repositories/ZipcodeRepositoryDatabase";

export default class RepositoryDatabaseFactory implements RepositoryFactory {
	constructor(readonly connection: DatabaseConnection) {}
	createZipcodeRepository(): ZipcodeRepository {
		return new ZipcodeRepositoryDatabase(this.connection);
	}
}
