import SimulateFreight from "../../application/usacases/SimulateFreight";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class UsecaseFactory {
	constructor(readonly repositoryFactory: RepositoryFactory) {}

	createSimulateFreight() {
		return new SimulateFreight(this.repositoryFactory);
	}
}
