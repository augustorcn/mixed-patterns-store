import AuthGateway from "../../application/gateways/AuthGateway";
import IHttpClient from "../http/HttpClient";
import settings from "../config/HttpClientSettings";
export default class HttpAuthGateway implements AuthGateway {
	constructor(readonly httpClient: IHttpClient) {}
	async verify(token: string): Promise<any> {
		const output = await this.httpClient.post(`http://${settings.auth.host}:${settings.auth.port}/verify`, {
			token,
		});
		return output.data;
	}
}
