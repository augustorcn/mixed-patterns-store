import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import UserRepository from "../repositories/UserRepositoryDatabase";
import DatabaseConnection from "../database/DatabaseConnection";
import UserRepositoryDatabase from "../repositories/UserRepositoryDatabase";

export default class RepositoryDatabaseFactory implements RepositoryFactory {
	constructor(readonly connection: DatabaseConnection) {}
	createUserRepository(): UserRepository {
		return new UserRepositoryDatabase(this.connection);
	}
}
