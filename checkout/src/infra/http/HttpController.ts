import UsecaseFactory from "../factories/UsecaseFactory";
import IHttpServer from "./HttpServer";

export default class HttpController {
	constructor(
		readonly httpServer: IHttpServer,
		usecaseFactory: UsecaseFactory
	) {
		httpServer.on("post", "/checkout", async (params: any, body: any) => {
			const checkout = usecaseFactory.createCheckout();
			const output = await checkout.execute(body);
			return output;
		});
	}
}
