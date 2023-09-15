import Order from "../entities/Order";

export default interface OrderRepository {
	get(id: string): Promise<Order>;
	save(order: Order): Promise<void>;
	count(): Promise<number>;
	clear(): Promise<void>;
}
