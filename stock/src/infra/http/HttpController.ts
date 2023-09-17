import UsecaseFactory from "../factories/UsecaseFactory";
import HttpServer from "./HttpServer";

export default class HttpController {
	constructor(
		readonly httpServer: HttpServer,
		usecaseFactory: UsecaseFactory
	) {
		httpServer.on("post", "/decreaseStock", async (params: any, body: any) => {
			const checkout = usecaseFactory.createDecreaseStock();
			const output = await checkout.execute(body);
			return output;
		});

		httpServer.on("get", "/getStock/:idProduct", async (params: any, body: any) => {
			const checkout = usecaseFactory.createGetStock();
			const output = await checkout.execute(params.idProduct);
			return output;
		});
	}
}
