import "dotenv/config";

const settings = {
	user: process.env.FREIGHT_POSTGRES_USER,
	password: process.env.FREIGHT_POSTGRES_PASSWORD,
	host: process.env.FREIGHT_POSTGRES_HOST,
	port: process.env.FREIGHT_POSTGRES_PORT,
	database: process.env.FREIGHT_POSTGRES_DATABASE,
};

export default settings;
