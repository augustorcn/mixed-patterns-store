import AuthGateway from "../../application/gateways/AuthGateway";
import IHttpClient from "../http/HttpClient";

export default class HttpAuthGateway implements AuthGateway {
	constructor(readonly httpClient: IHttpClient) {}
	async verify(token: string): Promise<any> {
		const output = await this.httpClient.post("http://auth:3000/verify", {
			token,
		});
		return output.data;
	}
}
