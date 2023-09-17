import DecreaseStock from "../../src/application/usecases/DecreaseStock";
import FakeRepositoryFactory from "../../src/infra/factories/FakeRepositoryFactory";

describe("DecreaseStock usecase", () => {
	it.only("should reduce the stock when execute method is called with valid parameters", async () => {
		const repositoryFactory = new FakeRepositoryFactory();
		const decreaseStock = new DecreaseStock(repositoryFactory);
		const input = {
			items: [
				{
					idProduct: 1,
					quantity: 1,
				},
			],
		};
		decreaseStock.execute(input);
	});
});
