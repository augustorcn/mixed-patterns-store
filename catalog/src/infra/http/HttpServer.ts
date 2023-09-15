export default interface HttpServer {
	on(method: string, url: string, callback: Function): Promise<void>;
	listen(port: number): Promise<void>;
}
