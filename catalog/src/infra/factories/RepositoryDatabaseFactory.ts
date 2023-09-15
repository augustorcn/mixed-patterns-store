import ProductRepository from "../../domain/repositories/ProductRepository";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import DatabaseConnection from "../database/DatabaseConnection";
import ProductRepositoryDatabase from "../repositories/ProductRepositoryDatabase";

export default class RepositoryDatabaseFactory implements RepositoryFactory {
	constructor(readonly connection: DatabaseConnection) {}
	createProductRepository(): ProductRepository {
		return new ProductRepositoryDatabase(this.connection);
	}
}
