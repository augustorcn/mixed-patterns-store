import axios from "axios";

describe("api", () => {
	beforeAll(() => {
		axios.defaults.validateStatus = function () {
			return true;
		};
	});
	it("should signup a user when the /signup endpoint is called with a valid payload", async () => {
		const input = {
			email: "teste@teste.com",
			password: "123",
		};
		const response = await axios.post("http://localhost:3001/signup", input);
		const output = response.data;
		expect(output).toStrictEqual("");
	});
	it("should return a status code 200 when the /signup endpoint is called with a valid payload", async () => {
		const input = {
			email: "teste@teste.com",
			password: "123",
		};
		const response = await axios.post("http://localhost:3001/signup", input);
		expect(response.status).toBe(200);
	});
	it("should return a user token when the /login endpoint is called with a valid payload", async () => {
		const input = {
			email: "teste@teste.com",
			password: "123",
			date: "3024-01-01T00:00:00",
		};
		const userToken = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0",
		};
		const response = await axios.post("http://localhost:3001/login", input);
		const output = response.data;
		expect(output).toStrictEqual(userToken);
	});
	it("should return a status code 200 when the /login endpoint is called with a valid payload", async () => {
		const input = {
			email: "teste@teste.com",
			password: "123",
			date: "3024-01-01T00:00:00",
		};
		const response = await axios.post("http://localhost:3001/login", input);
		expect(response.status).toBe(200);
	});
	it("should return a user email when the /verify endpoint is called with a valid payload", async () => {
		const input = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0",
		};
		const userEmail = { email: "teste@teste.com" };
		const response = await axios.post("http://localhost:3001/verify", input);
		const output = response.data;
		expect(output).toStrictEqual(userEmail);
	});
	it("should return a status code 200 when the /verify endpoint is called with a valid payload", async () => {
		const input = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0",
		};
		const response = await axios.post("http://localhost:3001/verify", input);
		expect(response.status).toBe(200);
	});
	it("should return a status code 404 when the invalid route is called", async () => {
		const response = await axios.get("http://localhost:3001/invalid/route");
		expect(response.status).toBe(404);
	});
});