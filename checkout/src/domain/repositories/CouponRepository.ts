import Coupon from "../entities/Coupon";

export default interface CouponRepository {
	get(coupon: string): Promise<Coupon>;
}
