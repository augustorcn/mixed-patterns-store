import AuthDecorator from "../../application/decorators/AuthDecorator";
import LogDecorator from "../../application/decorators/LogDecorator";
import Checkout from "../../application/usacases/Checkout";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import Queue from "../queue/Queue";
import GatewayFactory from "./HttpGatewayFactory";

export default class UsecaseFactory {
	constructor(
		readonly repositoryFactory: RepositoryFactory,
		readonly gatewayfactory: GatewayFactory,
		readonly queue: Queue
	) {}

	createCheckout() {
		return new LogDecorator(
			new AuthDecorator(new Checkout(this.repositoryFactory, this.gatewayfactory, this.queue), this.gatewayfactory)
		);
	}
}
