import FreightGateway, { Input, Output } from "../../application/gateways/FreightGateway";
import IHttpClient from "../http/HttpClient";

export default class HttpFreightGateway implements FreightGateway {
	constructor(readonly httpClient: IHttpClient) {}
	async simulateFreight(input: Input): Promise<Output> {
		const output = await this.httpClient.post("http://freight:3000/simulateFreight", input);
		return { freight: output.data.freight };
	}
}
