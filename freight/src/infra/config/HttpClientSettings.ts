import "dotenv/config";

const settings = {
	freight: {
		host: process.env.FREIGHT_HOST,
		port: parseInt(process.env.FREIGHT_EXTERNAL_PORT || ""),
	},
};

export default settings;
