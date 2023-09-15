import CouponRepository from "../../domain/repositories/CouponRepository";
import OrderRepository from "../../domain/repositories/OrderRepository";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import DatabaseConnection from "../database/DatabaseConnection";
import CouponRepositoryDatabase from "../repositories/CouponRepositoryDatabase";
import OrderRepositoryDatabase from "../repositories/OrderRepositoryDatabase";

export default class RepositoryDatabaseFactory implements RepositoryFactory {
	constructor(readonly connection: DatabaseConnection) {}
	createOrderRepository(): OrderRepository {
		return new OrderRepositoryDatabase(this.connection);
	}
	createCouponRepository(): CouponRepository {
		return new CouponRepositoryDatabase(this.connection);
	}
}
