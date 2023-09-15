import AuthGateway from "../gateways/AuthGateway";
import GatewayFactory from "../gateways/GatewayFactory";
import Usecase from "../usacases/Usecase";

export default class AuthDecorator implements Usecase {
	authGateway: AuthGateway;
	constructor(
		readonly usecase: Usecase,
		readonly gatewayFactory: GatewayFactory
	) {
		this.authGateway = gatewayFactory.createAuthGateway();
	}

	async execute(input: any): Promise<any> {
		const session = await this.authGateway.verify(input.token);
		if (!session) throw new Error("Authentication failed.");
		return this.usecase.execute(input);
	}
}
