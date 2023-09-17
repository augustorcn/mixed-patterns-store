import express, { Request, Response } from "express";
import HttpServer from "./HttpServer";

export default class ExpressAdapter implements HttpServer {
	app: any;
	constructor() {
		this.app = express();
		this.app.use(express.json());
	}
	async on(method: string, url: string, callback: Function): Promise<void> {
		this.app[method](url, async (req: Request, res: Response) => {
			try {
				const output = await callback(req.params, req.body);
				return res.json(output);
			} catch (error: any) {
				res.status(422).json({
					message: error.message,
				});
			}
		});
	}
	async listen(port: number): Promise<void> {
		this.app.listen(port);
	}
}
