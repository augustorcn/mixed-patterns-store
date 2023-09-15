import GetProduct from "../../src/application/usacases/GetProduct";
import FakeRepositoryFactory from "../../src/infra/factories/FakeRepositoryFactory";

describe("get product usecase", () => {
	let getProduct: GetProduct;
	beforeAll(() => {
		const repositoryFactory = new FakeRepositoryFactory();
		getProduct = new GetProduct(repositoryFactory);
	});
	it("should return a valid product when the GetProduct usecase is created and execute method is called with a valid product id", async () => {
		const product = {
			id: 1,
			name: "Book",
			price: 2000,
			height: 30,
			width: 100,
			length: 10,
			weight: 10,
			density: 100,
			volume: 0.03,
		};
		const output = await getProduct.execute(product.id);
		expect(output).toStrictEqual(product);
	});
});
