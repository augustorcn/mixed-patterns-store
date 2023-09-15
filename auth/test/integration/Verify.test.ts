import Verify from "../../src/application/usecases/Verify";

describe("verify usecase", () => {
	it("should return a valid email when the Verify usecase is created and execute method is called with valid parameters", async () => {
		const input = {
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MSwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.HxvR-4JAu9gHO1lbHZ6OYTr3Bh_bajsmCHNHp4nLvo0",
		};
		const verify = new Verify();
		const output = await verify.execute(input);
		expect(output.email).toBe("teste@teste.com");
	});
});
