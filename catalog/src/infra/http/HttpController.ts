import UsecaseFactory from "../factories/UsecaseFactory";
import IHttpServer from "./HttpServer";

export default class HttpController {
	constructor(
		readonly httpServer: IHttpServer,
		usecaseFactory: UsecaseFactory
	) {
		httpServer.on("get", "/products", async (params: any, body: any) => {
			const getProducts = usecaseFactory.createGetProducts();
			const output = await getProducts.execute();
			return output;
		});
		httpServer.on("get", "/products/:id", async (params: any, body: any) => {
			const getProduct = usecaseFactory.createGetProduct();
			const output = await getProduct.execute(params.id);
			return output;
		});
	}
}
