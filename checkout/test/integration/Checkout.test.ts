import Checkout from "../../src/application/usacases/Checkout";
import FakeGatewayFactory from "../../src/infra/factories/FakeGatewayFactory";
import FakeRepositoryFactory from "../../src/infra/factories/FakeRepositoryFactory";

describe("checkout usecase", () => {
	let checkout: Checkout;
	beforeAll(() => {
		const repositoryFactory = new FakeRepositoryFactory();
		const gatewayFactory = new FakeGatewayFactory();
		checkout = new Checkout(repositoryFactory, gatewayFactory);
	});
	it("should throw an exception with the message 'Invalid Cpf' when the Checkout usecase is build with a invalid cpf and the execute method is called", async () => {
		const input: any = {
			cpf: "291.029.918-90",
			itens: [],
		};
		expect(() => checkout.execute(input)).rejects.toThrow(new Error("Invalid Cpf"));
	});
	it("should set a total value in a total property when the Checkout usecase is build with a valid input and the execute method is called", async () => {
		const input: any = {
			cpf: "643.702.360-02",
			itens: [
				{
					id: 1,
					quantity: 1,
				},
				{
					id: 2,
					quantity: 1,
				},
			],
		};
		const output = await checkout.execute(input);
		const total = output.total;
		expect(total).toBe(5010);
	});
	it("should set a total value in total property when the Checkout usecase is build with a valid coupon and execute method is called", async () => {
		const input: any = {
			cpf: "643.702.360-02",
			itens: [
				{
					id: 1,
					quantity: 1,
				},
				{
					id: 2,
					quantity: 1,
				},
			],
			coupon: "DISC10",
		};
		const output = await checkout.execute(input);
		const total = output.total;
		expect(total).toBe(4510);
	});
	it("should set a total value in total property when the Checkout usecase is build with a inexistent coupon and execute method is called", async () => {
		const input: any = {
			cpf: "643.702.360-02",
			itens: [
				{
					id: 1,
					quantity: 1,
				},
				{
					id: 2,
					quantity: 1,
				},
			],
			coupon: "INVALID10",
		};
		const output = await checkout.execute(input);
		const total = output.total;
		expect(total).toBe(5010);
	});
	it("should set a total value in total property when the Checkout usecase is build with a expirated coupon and execute method is called", async () => {
		const input: any = {
			cpf: "643.702.360-02",
			itens: [
				{
					id: 1,
					quantity: 1,
				},
				{
					id: 2,
					quantity: 1,
				},
			],
			coupon: "EXPIRATED10",
		};
		const output = await checkout.execute(input);
		const total = output.total;
		expect(total).toBe(5010);
	});
	it("should throw a exception with the message 'Invalid Quantity' when the Checkout usecase is build with some negative item quantity and the execute method is called", async () => {
		const input: any = {
			cpf: "643.702.360-02",
			itens: [
				{
					id: 1,
					quantity: 1,
				},
				{
					id: 2,
					quantity: -1,
				},
			],
		};
		expect(() => checkout.execute(input)).rejects.toThrow(new Error("Invalid Quantity"));
	});
	it("should throws a exception with the message 'Duplicated Item' when the Checkout usecase is build with a duplicated item and the execute method is called", async () => {
		const input: any = {
			cpf: "643.702.360-02",
			itens: [
				{
					id: 1,
					quantity: 1,
				},
				{
					id: 1,
					quantity: 1,
				},
			],
		};
		expect(() => checkout.execute(input)).rejects.toThrow(new Error("Duplicated Item"));
	});
	it("should set a total value in total property and valid freight in freight property when the Checkout usecase is build with a valid coordinates and the execute method is called", async () => {
		const input: any = {
			cpf: "643.702.360-02",
			itens: [
				{
					id: 1,
					quantity: 1,
				},
				{
					id: 2,
					quantity: 1,
				},
			],
			from: "0912091",
			to: "90812012",
		};
		const output = await checkout.execute(input);
		const total = output.total;
		const freight = output.freight;
		expect(total).toBe(5010);
		expect(freight).toBe(10);
	});
});
