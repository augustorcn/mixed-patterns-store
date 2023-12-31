import axios from "axios";
import settings from "../../src/infra/config/HttpClientSettings";

describe("api", () => {
	const catalogServiceUrl = `http://${settings.catalog.host}:${settings.catalog.port}`;
	beforeAll(() => {
		axios.defaults.validateStatus = function () {
			return true;
		};
	});
	it("GET /products - should return a list of products when the /products endpoint is called with a valid payload", async () => {
		const products = [
			{ name: "Livro", price: "2000", productId: 1 },
			{ name: "Monitor", price: "3000", productId: 2 },
			{ name: "Mouse", price: "1000", productId: 3 },
		];
		const response = await axios.get(`${catalogServiceUrl}/products`);
		const output = response.data;
		expect(output).toStrictEqual(products);
	});
	it("GET /products - should return a status code 200 when the /products endpoint is called with a valid payload", async () => {
		const products = [
			{ name: "Livro", price: "2000", productId: 1 },
			{ name: "Monitor", price: "3000", productId: 2 },
			{ name: "Mouse", price: "1000", productId: 3 },
		];
		const response = await axios.get(`${catalogServiceUrl}/products`);
		expect(response.status).toBe(200);
	});
	it("GET /products/:id - should return a product when the /product endpoint is called with a valid parameter", async () => {
		const product = {
			id: 1,
			name: "Livro",
			price: "2000",
			height: 30,
			width: 100,
			length: 10,
			weight: 10,
			density: 100,
			volume: 0.03,
		};
		const response = await axios.get(`${catalogServiceUrl}/products/${product.id}`);
		const output = response.data;
		expect(output).toStrictEqual(product);
	});
	it("GET /products/:id - should return a status code 200 when the /product endpoint is called with a valid parameter", async () => {
		const productId = 1;
		const response = await axios.get(`${catalogServiceUrl}/products/${productId}`);
		expect(response.status).toBe(200);
	});
	it("GET /invalid/route - should return a status code 404 when the invalid route is called", async () => {
		const response = await axios.get(`${catalogServiceUrl}/invalid/route`);
		expect(response.status).toBe(404);
	});
});
