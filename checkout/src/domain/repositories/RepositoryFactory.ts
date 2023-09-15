import CouponRepository from "./CouponRepository";
import OrderRepository from "./OrderRepository";

export default interface RepositoryFactory {
	createOrderRepository(): OrderRepository;
	createCouponRepository(): CouponRepository;
}
