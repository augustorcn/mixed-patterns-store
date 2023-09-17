export default interface NoSqlDatabaseConnection {
	connect(): Promise<void>;
	get(collectionName: string, queryObject: any): Promise<any>;
	insert(collectionName: string, data: any): Promise<void>;
	disconnect(): Promise<void>;
}
