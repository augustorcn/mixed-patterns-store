import DatabaseConnection from "./DatabaseConnection";
import pgp from "pg-promise";
import settings from "../config/PostgresSettings";

export default class PgPromiseAdapter implements DatabaseConnection {
	connection: any;
	async connect(): Promise<void> {
		this.connection = pgp()(
			`postgres://${settings.user}:${settings.password}@${settings.host}:${settings.port}/${settings.database}`
		);
	}
	async query(statement: string, params: any): Promise<any> {
		return this.connection.query(statement, params);
	}
	async close(): Promise<void> {
		await this.connection.$pool.end();
	}
}
