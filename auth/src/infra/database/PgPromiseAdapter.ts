import DatabaseConnection from "./DatabaseConnection";
import pgp from "pg-promise";

export default class PgPromiseAdapter implements DatabaseConnection {
	connection: any;
	async connect(): Promise<void> {
		this.connection = pgp()("postgres://postgres:admin@auth-postgres:5432/auth");
	}
	async query(statement: string, params: any): Promise<any> {
		return this.connection.query(statement, params);
	}
	async close(): Promise<void> {
		await this.connection.$pool.end();
	}
}
