import pgp from "pg-promise";
import DatabaseConnection from "./DatabaseConnection";

export default class PgPromiseAdapter implements DatabaseConnection {
	connection: any;
	async connect(): Promise<void> {
		this.connection = pgp()("postgres://postgres:admin@checkout-postgres:5432/checkout");
	}
	async query(statement: string, params: any): Promise<any> {
		return this.connection.query(statement, params);
	}
	async close(): Promise<void> {
		throw this.connection.$pool.end();
	}
}
