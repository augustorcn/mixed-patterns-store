import SimulateFreight from "../../src/application/usacases/SimulateFreight";
import FakeRepositoryFactory from "../../src/infra/factories/FakeRepositoryFactory";

describe("simulate freight usecase", () => {
	let simulateFreight: SimulateFreight;
	beforeAll(() => {
		const repositoryFactory = new FakeRepositoryFactory();
		simulateFreight = new SimulateFreight(repositoryFactory);
	});
	it("should return a valid freight when the SimulateFreight usecase is created and execute method is called with valid parameters", async () => {
		const input = {
			itens: [
				{ volume: 100, density: 100, quantity: 1 },
				{ volume: 200, density: 200, quantity: 1 },
			],
			from: "98129812",
			to: "198729812",
		};

		const output = await simulateFreight.execute(input);
		expect(output.freight).toBe(500000);
	});
});
