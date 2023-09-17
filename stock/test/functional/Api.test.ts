import axios from "axios";
import settings from "../../src/infra/config/HttpClientSettings";

describe("api", () => {
	const stockServiceUrl = `http://${settings.stock.host}:${settings.stock.port}`;
	beforeAll(() => {
		axios.defaults.validateStatus = function () {
			return true;
		};
	});
	it("POST /decreaseStock - should return a status code 200 when the /decreaseStock endpoint is called with a valid payload", async () => {
		const input = {
			items: [
				{ idProduct: 1, quantity: 5 },
				{ idProduct: 1, quantity: 8 },
			],
		};
		const response = await axios.post(`${stockServiceUrl}/decreaseStock`, input);
		expect(response.status).toBe(200);
	});
	it("GET /getStock/:idProduct - should return a calculated stock from a product when the /getStock endpoint is called with a valid parameters", async () => {
		const idProduct = 2;
		const response = await axios.get(`${stockServiceUrl}/getStock/${idProduct}`);
		const output = response.data;
		expect(output).toStrictEqual(20);
	});
	it("GET /invalid/route - should return a status code 404 when the invalid route is called", async () => {
		const response = await axios.get(`${stockServiceUrl}/invalid/route`);
		expect(response.status).toBe(404);
	});
});
