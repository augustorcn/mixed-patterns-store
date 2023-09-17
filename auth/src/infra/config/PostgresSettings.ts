import "dotenv/config";

const settings = {
	user: process.env.AUTH_POSTGRES_USER,
	password: process.env.AUTH_POSTGRES_PASSWORD,
	host: process.env.AUTH_POSTGRES_HOST,
	port: process.env.AUTH_POSTGRES_PORT,
	database: process.env.AUTH_POSTGRES_DATABASE,
};

export default settings;
