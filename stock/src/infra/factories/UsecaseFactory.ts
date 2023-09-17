import DecreaseStock from "../../application/usecases/DecreaseStock";
import GetStock from "../../application/usecases/GetStock";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class UsecaseFactory {
	constructor(readonly repositoryFactory: RepositoryFactory) {}

	createDecreaseStock() {
		return new DecreaseStock(this.repositoryFactory);
	}

	createGetStock() {
		return new GetStock(this.repositoryFactory);
	}
}
