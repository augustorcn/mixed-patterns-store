import GetProduct from "../../application/usacases/GetProduct";
import GetProducts from "../../application/usacases/GetProducts";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class UsecaseFactory {
	constructor(readonly repositoryFactory: RepositoryFactory) {}

	createGetProducts() {
		return new GetProducts(this.repositoryFactory);
	}

	createGetProduct() {
		return new GetProduct(this.repositoryFactory);
	}
}
