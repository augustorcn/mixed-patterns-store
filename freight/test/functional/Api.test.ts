import axios from "axios";

describe("api", () => {
	beforeAll(() => {
		axios.defaults.validateStatus = function () {
			return true;
		};
	});
	it("POST /simulateFreight - should return a list of products when the /simulateFreight endpoint is called with a valid payload", async () => {
		const input = {
			itens: [{ volume: 10, density: 10, quantity: 1 }],
			from: "20202020",
			to: "30303030",
		};
		const simulatedFreight = { freight: 748.2217780081633 };
		const response = await axios.post("http://localhost:3004/simulateFreight", input);
		const output = response.data;
		expect(output).toStrictEqual(simulatedFreight);
	});
	it("POST /simulateFreight - should return a status code 200 when the /simulateFreight endpoint is called with a valid payload", async () => {
		const input = {
			itens: [{ volume: 10, density: 10, quantity: 1 }],
			from: "20202020",
			to: "30303030",
		};
		const response = await axios.post("http://localhost:3004/simulateFreight", input);
		expect(response.status).toBe(200);
	});
	it("GET /invalid/route - should return a status code 404 when the invalid route is called", async () => {
		const response = await axios.get("http://localhost:3004/invalid/route");
		expect(response.status).toBe(404);
	});
});
