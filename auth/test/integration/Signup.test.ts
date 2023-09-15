import Login from "../../src/application/usecases/Login";
import Signup from "../../src/application/usecases/Signup";
import FakeRepositoryFactory from "../../src/infra/factories/FakeRepositoryFactory";

describe("signup usecase", () => {
	it("should return a valid token when the Signup usecase is created and execute method is called with valid parameters", async () => {
		const repositoryFactory = new FakeRepositoryFactory();
		const input = {
			email: "teste@teste.com",
			password: "123",
			date: "3024-01-01T00:00:00",
		};
		const signup = new Signup(repositoryFactory);
		await signup.execute(input);
		const login = new Login(repositoryFactory);
		const output = await login.execute(input);
		expect(output.token).toBe(
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0"
		);
	});
});
