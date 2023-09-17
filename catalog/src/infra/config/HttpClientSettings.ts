import "dotenv/config";

const settings = {
	catalog: {
		host: process.env.CATALOG_HOST,
		port: parseInt(process.env.CATALOG_EXTERNAL_PORT || ""),
	},
};

export default settings;
