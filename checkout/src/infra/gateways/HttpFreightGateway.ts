import FreightGateway, { Input, Output } from "../../application/gateways/FreightGateway";
import IHttpClient from "../http/HttpClient";
import settings from "../config/HttpClientSettings";

export default class HttpFreightGateway implements FreightGateway {
	constructor(readonly httpClient: IHttpClient) {}
	async simulateFreight(input: Input): Promise<Output> {
		const output = await this.httpClient.post(
			`http://${settings.freight.host}:${settings.freight.port}/simulateFreight`,
			input
		);
		return { freight: output.data.freight };
	}
}
