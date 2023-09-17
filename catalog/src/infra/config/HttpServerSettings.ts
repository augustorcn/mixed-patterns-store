import "dotenv/config";

const settings = {
	internalPort: parseInt(process.env.CATALOG_INTERNAL_PORT || ""),
};

export default settings;
