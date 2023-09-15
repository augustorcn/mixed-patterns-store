import Coupon from "../../src/domain/entities/Coupon";

describe("coupon entity", () => {
	it("should return a true value when the Coupon entity is build with a valid coupon and the isValid method is called", async () => {
		const couponDate = new Date();
		couponDate.setDate(new Date().getDate() + 1);
		const coupon = new Coupon("DISC10", 10, couponDate);
		const counponIsValid = coupon.isValid(new Date());
		expect(counponIsValid).toBe(true);
	});
	it("should return a false value when the Coupon entity is build with a invalid coupon and the isValid method is called", async () => {
		const couponDate = new Date();
		couponDate.setDate(new Date().getDate() - 1);
		const coupon = new Coupon("DISC10", 10, couponDate);
		const couponIsValid = coupon.isValid(new Date());
		expect(couponIsValid).toBe(false);
	});
	it("should return a valid discount when the Coupon entity is build with a valid coupon and the calculateDiscount method is called", async () => {
		const couponDate = new Date();
		couponDate.setDate(new Date().getDate() + 1);
		const coupon = new Coupon("DISC10", 10, couponDate);
		const calculatedDiscount = coupon.calculateDiscount(100);
		expect(calculatedDiscount).toBe(10);
	});
});
