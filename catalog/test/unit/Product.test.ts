import Product from "../../src/domain/entities/Product";

describe("product aggregate", () => {
	it("should created a Product entity when the constructor is called with a valid parameters", async () => {
		const product = new Product(1, "Book", 5000, 100, 30, 30, 3);
		expect(product).toBeDefined();
	});
	it("should return a valid volume when the Product aggregate is created with valid parameters and getVolume method is called", async () => {
		const product = new Product(1, "Book", 5000, 100, 30, 30, 3);
		expect(product.getVolume()).toBe(0.09);
	});
	it("should return a true value when the Product aggregate is created with valid parameters and dimensionsIsValid method is called", async () => {
		const product = new Product(1, "Book", 5000, 100, 30, 30, 3);
		expect(product.dimensionsIsValid()).toBe(true);
	});
	it("should return a true value when the Product aggregate is created with valid parameters and weightIsValid method is called", async () => {
		const product = new Product(1, "Book", 5000, 100, 30, 30, 3);
		expect(product.weightIsValid()).toBe(true);
	});
	it("should return a valid density when the Product aggregate is created with valid parameters and getDensity method is called", async () => {
		const product = new Product(1, "Book", 5000, 100, 30, 30, 3);
		expect(product.getDensity()).toBe(33.333333333333336);
	});
	it("should throw an exception with the message 'Invalid Dimensions' when the Product aggregate is build with a invalid dimensions", async () => {
		expect(() => new Product(1, "Book", 5000, 100, -30, 30, 3)).toThrow("Invalid Dimensions");
	});
	it("should throw an exception with the message 'Invalid Weight' when the Product aggregate is build with a invalid weight", async () => {
		expect(() => new Product(1, "Book", 5000, 100, 30, 30, -3)).toThrow("Invalid Weight");
	});
});
