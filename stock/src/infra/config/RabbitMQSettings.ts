import "dotenv/config";

const settings = {
	user: process.env.RABBITMQ_USER,
	password: process.env.RABBITMQ_PASSWORD,
	host: process.env.RABBITMQ_HOST,
	port: process.env.RABBITMQ_PORT,
};

export default settings;
