import axios from "axios";
import settings from "../../src/infra/config/HttpClientSettings";

describe("api", () => {
	const authServiceUrl = `http://${settings.auth.host}:${settings.auth.port}`;
	beforeAll(() => {
		axios.defaults.validateStatus = function () {
			return true;
		};
	});
	it("POST /signup - should signup a user when the /signup endpoint is called with a valid payload", async () => {
		const input = {
			email: "teste@teste.com",
			password: "123",
		};
		const response = await axios.post(`${authServiceUrl}/signup`, input);
		const output = response.data;
		expect(output).toStrictEqual("");
	});
	it("POST /signup - should return a status code 200 when the /signup endpoint is called with a valid payload", async () => {
		const input = {
			email: "teste@teste.com",
			password: "123",
		};
		const response = await axios.post(`${authServiceUrl}/signup`, input);
		expect(response.status).toBe(200);
	});
	it("POST /login - should return a user token when the /login endpoint is called with a valid payload", async () => {
		const input = {
			email: "teste@teste.com",
			password: "123",
			date: "3024-01-01T00:00:00",
		};
		const userToken = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0",
		};
		const response = await axios.post(`${authServiceUrl}/login`, input);
		const output = response.data;
		expect(output).toStrictEqual(userToken);
	});
	it("POST /login - should return a status code 200 when the /login endpoint is called with a valid payload", async () => {
		const input = {
			email: "teste@teste.com",
			password: "123",
			date: "3024-01-01T00:00:00",
		};
		const response = await axios.post(`${authServiceUrl}/login`, input);
		expect(response.status).toBe(200);
	});
	it("POST /verify - should return a user email when the /verify endpoint is called with a valid payload", async () => {
		const input = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0",
		};
		const userEmail = { email: "teste@teste.com" };
		const response = await axios.post(`${authServiceUrl}/verify`, input);
		const output = response.data;
		expect(output).toStrictEqual(userEmail);
	});
	it("POST /verify - should return a status code 200 when the /verify endpoint is called with a valid payload", async () => {
		const input = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0",
		};
		const response = await axios.post(`${authServiceUrl}/verify`, input);
		expect(response.status).toBe(200);
	});
	it("GET /invalid/route - should return a status code 404 when the invalid route is called", async () => {
		const response = await axios.get(`${authServiceUrl}/invalid/route`);
		expect(response.status).toBe(404);
	});
});
