import axios from "axios";
import { v4 as uuid } from "uuid";

describe("api", () => {
	beforeAll(() => {
		axios.defaults.validateStatus = function () {
			return true;
		};
	});
	it("should make a checkout and return a order values when the /checkout endpoint is called with a valid payload ", async () => {
		const input = {
			id: uuid(),
			cpf: "643.702.360-02",
			itens: [
				{ id: 1, quantity: 1 },
				{ id: 2, quantity: 2 },
			],
			coupon: "",
			from: "20202020",
			to: "30303030",
			date: new Date(),
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0",
		};
		const createdOrder = { freight: 351.6642356638367, total: 8351.664235663837 };
		const response = await axios.post("http://localhost:3003/checkout", input);
		const output = response.data;
		console.info(createdOrder);
		expect(output).toStrictEqual(createdOrder);
	});
	it("should return a status code 200 when the /checkout endpoint is called with a valid payload", async () => {
		const input = {
			id: uuid(),
			cpf: "643.702.360-02",
			itens: [
				{ id: 1, quantity: 1 },
				{ id: 2, quantity: 2 },
			],
			coupon: "",
			from: "20202020",
			to: "30303030",
			date: new Date(),
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0",
		};
		const response = await axios.post("http://localhost:3003/checkout", input);
		expect(response.status).toBe(200);
	});
	it("should return a status code 404 when the invalid route is called", async () => {
		const response = await axios.get("http://localhost:3003/invalid/route");
		expect(response.status).toBe(404);
	});
});
