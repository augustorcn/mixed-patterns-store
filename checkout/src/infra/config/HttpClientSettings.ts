import "dotenv/config";

const settings = {
	checkout: {
		host: process.env.CHECKOUT_HOST,
		port: parseInt(process.env.CHECKOUT_EXTERNAL_PORT || ""),
	},
	catalog: {
		host: process.env.CATALOG_HOST,
		port: parseInt(process.env.CATALOG_INTERNAL_PORT || ""),
	},
	auth: {
		host: process.env.AUTH_HOST,
		port: parseInt(process.env.AUTH_INTERNAL_PORT || ""),
	},
	freight: {
		host: process.env.FREIGHT_HOST,
		port: parseInt(process.env.FREIGHT_INTERNAL_PORT || ""),
	},
};

export default settings;
