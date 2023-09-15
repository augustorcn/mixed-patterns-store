import crypto from "crypto";
import Product from "../../src/domain/entities/Product";
import Order from "../../src/domain/entities/Order";
import Coupon from "../../src/domain/entities/Coupon";

describe("order aggregate", () => {
	it("should return a valid total value when the Order aggregate is build without a items", async () => {
		const order = new Order(crypto.randomUUID(), "643.702.360-02");
		const totalValue = order.getTotal();
		expect(totalValue).toBe(0);
	});
	it("should throw a exception with the message 'Invalid Cpf' when the Order aggregate constructor is called with a invalid Cpf value", async () => {
		expect(() => new Order(crypto.randomUUID(), "643.702.360-03")).toThrow(new Error("Invalid Cpf"));
	});
	it("should return a valid total value when the Order aggregate is build with a valid items", async () => {
		const order = new Order(crypto.randomUUID(), "643.702.360-02");
		order.addItem(new Product(1, "Book", 3000, 10, 10, 10, 2), 1);
		order.addItem(new Product(2, "Monitor", 4000, 10, 10, 10, 2), 1);
		order.addItem(new Product(3, "Mouse", 4000, 10, 10, 20, 2), 1);
		const totalValue = order.getTotal();
		expect(totalValue).toBe(11000);
	});
	it("should throw a exception with the message 'Duplicated Item' when the Order aggregate is build with duplicated items", async () => {
		const order = new Order(crypto.randomUUID(), "643.702.360-02");
		order.addItem(new Product(1, "Book", 3000, 10, 10, 10, 2), 1);
		expect(() => order.addItem(new Product(1, "Book", 3000, 10, 10, 10, 2), 1)).toThrow(new Error("Duplicated Item"));
	});
	it("should return a valid code when the Order aggregate is build with a valid items", async () => {
		const order = new Order(crypto.randomUUID(), "643.702.360-02");
		order.addItem(new Product(1, "Book", 3000, 10, 10, 10, 2), 1);
		order.addItem(new Product(2, "Monitor", 4000, 10, 10, 10, 2), 1);
		order.addItem(new Product(3, "Mouse", 4000, 10, 10, 20, 2), 1);
		const code = order.code;
		expect(code).toBe("202300000001");
	});
	it("should return a valid total value with a discount when the Order aggregate is build with a valid items and a valid coupon", async () => {
		const order = new Order(crypto.randomUUID(), "643.702.360-02");
		order.addItem(new Product(1, "Book", 3000, 10, 10, 10, 2), 1);
		order.addItem(new Product(2, "Monitor", 4000, 10, 10, 10, 2), 1);
		order.addItem(new Product(3, "Mouse", 4000, 10, 10, 20, 2), 1);
		order.addCoupon(new Coupon("DISC10", 10, new Date()));
		const totalValue = order.getTotal();
		expect(totalValue).toBe(9900);
	});
});
