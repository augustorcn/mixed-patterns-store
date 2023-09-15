import UsecaseFactory from "../factories/UsecaseFactory";
import IHttpServer from "./HttpServer";

export default class HttpController {
	constructor(
		readonly httpServer: IHttpServer,
		usecaseFactory: UsecaseFactory
	) {
		httpServer.on("post", "/simulateFreight", async (params: any, body: any) => {
			const simulateFreight = usecaseFactory.createSimulateFreight();
			const output = await simulateFreight.execute(body);
			return output;
		});
	}
}
