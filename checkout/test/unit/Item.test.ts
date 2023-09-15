import Item from "../../src/domain/entities/Item";

describe("item entity", () => {
	it("should throw a exception with the message 'Invalid Quantity' when the Item entity constructor is called with a negative quantity", async () => {
		expect(() => new Item(1, 10, -1)).toThrow("Invalid Quantity");
	});
	it("should throw a exception with the message 'Invalid Quantity' when the Item entity constructor is called with a zero quantity", async () => {
		expect(() => new Item(1, 10, 0)).toThrow("Invalid Quantity");
	});
	it("should return a total value when the getTotal method is called", async () => {
		const item = new Item(1, 10, 10);
		const totalValue = item.getTotal();
		expect(totalValue).toBe(100);
	});
});
