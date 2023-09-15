import pgp from "pg-promise";
import DatabaseConnection from "./DatabaseConnection";

export default class PgPromiseAdapter implements DatabaseConnection {
	private connection: any;
	async connect(): Promise<void> {
		this.connection = pgp()("postgres://postgres:admin@freight-postgres:5432/freight");
	}
	async query(statement: string, params: any): Promise<any> {
		return this.connection.query(statement, params);
	}
	async close(): Promise<void> {
		throw this.connection.$pool.end();
	}
}
