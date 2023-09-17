import StockEntry from "../../src/domain/entities/StockEntry";

describe("StockEntry aggregate", () => {
	it("should create a StockEntry aggregate when the StockEntry constructor is called with valid parameters", async () => {
		const stockEntry = new StockEntry(1, "in", 1);
		expect(stockEntry).toBeDefined();
	});
	it("should throw a exception with the message 'Invalid Quantity' when the StockEntry aggregate constructor is called with a invalid quantity value", async () => {
		expect(() => new StockEntry(1, "in", 0)).toThrow(new Error("Invalid Quantity"));
	});
});
