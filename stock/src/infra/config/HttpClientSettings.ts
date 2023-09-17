import "dotenv/config";

const settings = {
	stock: {
		host: process.env.STOCK_HOST,
		port: parseInt(process.env.STOCK_EXTERNAL_PORT || ""),
	},
};

export default settings;
