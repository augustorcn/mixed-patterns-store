import "dotenv/config";

const settings = {
	user: process.env.STOCK_MONGO_USER,
	password: process.env.STOCK_MONGO_PASSWORD,
	host: process.env.STOCK_MONGO_HOST,
	port: process.env.STOCK_MONGO_PORT,
	database: process.env.STOCK_MONGO_DATABASE,
};

export default settings;
