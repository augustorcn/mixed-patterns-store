import "dotenv/config";

const settings = {
	user: process.env.CHECKOUT_POSTGRES_USER,
	password: process.env.CHECKOUT_POSTGRES_PASSWORD,
	host: process.env.CHECKOUT_POSTGRES_HOST,
	port: process.env.CHECKOUT_POSTGRES_PORT,
	database: process.env.CHECKOUT_POSTGRES_DATABASE,
};

export default settings;
