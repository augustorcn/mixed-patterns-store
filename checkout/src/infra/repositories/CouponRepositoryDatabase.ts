import Coupon from "../../domain/entities/Coupon";
import CouponRepository from "../../domain/repositories/CouponRepository";
import DatabaseConnection from "../database/DatabaseConnection";

export default class CouponRepositoryDatabase implements CouponRepository {
	constructor(readonly connection: DatabaseConnection) {}
	async get(coupon: string): Promise<Coupon> {
		const [couponData] = await this.connection.query("select * from coupons where code = $1", [coupon]);
		return new Coupon(couponData?.code, couponData?.percentage, couponData?.expiredate);
	}
}
