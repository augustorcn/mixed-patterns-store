import Cpf from "../../src/domain/valueObjects/Cpf";

describe("cpf value object", () => {
	const invalidCPFs = ["081.891.519-19", "081.811.519-1x", "081.891.519", "081.871.519-1010", "", "092.01", undefined];
	it.each(invalidCPFs)(
		"should throw a exception with the message 'Invalid Cpf' when the Cpf value object constructor is called with a invalid cpf value",
		(cpf: any) => {
			expect(() => new Cpf(cpf)).toThrow(new Error("Invalid Cpf"));
		}
	);
	const validCPFs = ["404.623.940-93", "692.006.360-39"];
	it.each(validCPFs)(
		"should return a valid cpf when a Cpf value object constructor is called with a valid cpf value and getValue method is called",
		(cpf: string) => {
			const createdCpf = new Cpf(cpf);
			const cpfValue = createdCpf.getValue();
			expect(cpfValue).toBe(cpf);
		}
	);
});
