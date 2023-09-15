import IHttpServer from "./HttpServer";
import UsecaseFactory from "../factories/UsecaseFactory";

export default class HttpController {
	constructor(
		readonly httpServer: IHttpServer,
		usecaseFactory: UsecaseFactory
	) {
		httpServer.on("post", "/login", async (params: any, body: any) => {
			const login = usecaseFactory.createLogin();
			const output = await login.execute(body);
			return output;
		});
		httpServer.on("post", "/signup", async (params: any, body: any) => {
			const signup = usecaseFactory.createSignup();
			const output = await signup.execute(body);
			return output;
		});
		httpServer.on("post", "/verify", async (params: any, body: any) => {
			const verify = usecaseFactory.createVerify();
			const output = await verify.execute(body);
			return output;
		});
	}
}
