import OrderRepository from "../../domain/repositories/OrderRepository";
import Order from "../../domain/entities/Order";
import DatabaseConnection from "../database/DatabaseConnection";

export default class OrderRepositoryDatabase implements OrderRepository {
	constructor(readonly connection: DatabaseConnection) {}
	async save(order: Order): Promise<void> {
		await this.connection.query("insert into orders (id, code, cpf, total, freight) values ($1, $2, $3, $4, $5)", [
			order.id,
			order.code,
			order.cpf.getValue(),
			order.getTotal(),
			order.freight,
		]);
	}
	async get(id: string): Promise<any> {
		const [orderData] = await this.connection.query("select * from orders where id = $1", [id]);
		return orderData;
	}
	async count(): Promise<number> {
		const [data] = await this.connection.query("select count(*) from orders", []);
		return data.count;
	}
	async clear(): Promise<void> {
		await this.connection.query("delete from orders", []);
	}
}
