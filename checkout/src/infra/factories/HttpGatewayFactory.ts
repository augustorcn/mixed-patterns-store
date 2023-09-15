import AuthGateway from "../gateways/HttpAuthGateway";
import CatalogGateway from "../gateways/HttpCatalogGateway";
import FreightGateway from "../gateways/HttpFreightGateway";
import IHttpClient from "../http/HttpClient";
import GatewayFactory from "../../application/gateways/GatewayFactory";

export default class HtrtpGatewayFactory implements GatewayFactory {
	constructor(readonly httpClient: IHttpClient) {}
	createCatalogGateway(): CatalogGateway {
		return new CatalogGateway(this.httpClient);
	}
	createFreightGateway(): FreightGateway {
		return new FreightGateway(this.httpClient);
	}
	createAuthGateway(): AuthGateway {
		return new AuthGateway(this.httpClient);
	}
}
