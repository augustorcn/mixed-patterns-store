import "dotenv/config";

const settings = {
	internalPort: parseInt(process.env.STOCK_INTERNAL_PORT || ""),
};

export default settings;
