import "dotenv/config";

const settings = {
	auth: {
		host: process.env.AUTH_HOST,
		port: parseInt(process.env.AUTH_EXTERNAL_PORT || ""),
	},
};

export default settings;
