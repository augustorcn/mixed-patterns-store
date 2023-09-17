import "dotenv/config";

const settings = {
	user: process.env.CATALOG_POSTGRES_USER,
	password: process.env.CATALOG_POSTGRES_PASSWORD,
	host: process.env.CATALOG_POSTGRES_HOST,
	port: process.env.CATALOG_POSTGRES_PORT,
	database: process.env.CATALOG_POSTGRES_DATABASE,
};

export default settings;
