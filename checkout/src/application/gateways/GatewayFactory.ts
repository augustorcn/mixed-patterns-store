import AuthGateway from "./AuthGateway";
import CatalogGateway from "./CatalogGateway";
import FreightGateway from "./FreightGateway";

export default interface GatewayFactory {
	createCatalogGateway(): CatalogGateway;
	createFreightGateway(): FreightGateway;
	createAuthGateway(): AuthGateway;
}
