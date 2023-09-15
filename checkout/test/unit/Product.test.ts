import Product from "../../src/domain/entities/Product";

describe("product entity", () => {
	it("should created a Product entity when the constructor is called with a valida parameters", async () => {
		const product = new Product(1, "Book", 10, 10, 1, 1, 1, 100, 100);
		expect(product).toBeDefined();
	});
});
