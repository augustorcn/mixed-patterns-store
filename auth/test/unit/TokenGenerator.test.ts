import TokenGenerator from "../../src/domain/domainServices/TokenGenerator";
import User from "../../src/domain/entities/User";

describe("token generator dmoain service", () => {
	it("should return a valid token when the sign method is called with a valid user", async () => {
		const tokenGenerator = new TokenGenerator("secret");
		const user = User.create("teste@teste.com", "123");
		const token = tokenGenerator.sign(user, new Date("3024-01-01T00:00:00.000"));
		expect(token).toBe(
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0"
		);
	});

	it("should return a valid email when the verify method is called with a valid token", async () => {
		const tokenGenerator = new TokenGenerator("secret");
		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0";
		const output = tokenGenerator.verify(token);
		expect(output.email).toBe("teste@teste.com");
	});
});
