import NoSqlDatabaseConnection from "./NoSqlDatabaseConnection";
import { MongoClient } from "mongodb";

export default class MongoAdapter implements NoSqlDatabaseConnection {
	connection: any;
	async connect(): Promise<void> {
		this.connection = await MongoClient.connect("mongodb://root:root@stock-mongo:27017/stock");
	}
	async disconnect(): Promise<void> {
		await this.connection.close();
	}
	async get(collectionName: string, queryObject: any): Promise<any> {
		try {
			await this.connect();
			return await this.connection.db().collection(collectionName).find(queryObject).toArray();
		} finally {
			await this.disconnect();
		}
	}
	async insert(collectionName: string, data: any): Promise<void> {
		try {
			await this.connect();
			const collection = await this.connection.db().collection(collectionName);
			await collection.insertOne(data);
		} finally {
			await this.disconnect();
		}
	}
}
