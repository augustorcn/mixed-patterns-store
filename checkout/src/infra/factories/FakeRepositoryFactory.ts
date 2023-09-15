import Coupon from "../../domain/entities/Coupon";
import Order from "../../domain/entities/Order";
import CouponRepository from "../../domain/repositories/CouponRepository";
import OrderRepository from "../../domain/repositories/OrderRepository";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class FakeRepositoryFactory implements RepositoryFactory {
	createOrderRepository(): OrderRepository {
		const orders: any = {
			1: new Order("1", "083891519-10", new Date(), 1),
			2: new Order("2", "083891519-10", new Date(), 2),
		};
		const orderRepository = {
			async count(): Promise<number> {
				return orders.length;
			},
			async save(order: Order): Promise<void> {},
			async get(id: string): Promise<any> {
				return orders[id];
			},
			async clear(): Promise<void> {},
		};
		return orderRepository;
	}
	createCouponRepository(): CouponRepository {
		const coupons: any = {
			DISC10: new Coupon("DISC10", 10, new Date("2024-07-22 00:00:00.000")),
			DISC20: new Coupon("DISC20", 20, new Date("2024-07-22 00:00:00.000")),
			EXPIRATED10: new Coupon("EXPIRATED10", 10, new Date("2020-07-22 00:00:00.000")),
		};
		const couponRepository = {
			async get(code: string): Promise<Coupon> {
				return coupons[code];
			},
		};
		return couponRepository;
	}
}
