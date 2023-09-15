import GetProducts from "../../src/application/usacases/GetProducts";
import FakeRepositoryFactory from "../../src/infra/factories/FakeRepositoryFactory";

describe("get products usecase", () => {
	let getProducts: GetProducts;
	beforeAll(() => {
		const repositoryFactory = new FakeRepositoryFactory();
		getProducts = new GetProducts(repositoryFactory);
	});
	it("should return a valid list of products when the GetProducts usecase is created and execute method is called", async () => {
		const output = await getProducts.execute();
		expect(output).toHaveLength(2);
	});
});
