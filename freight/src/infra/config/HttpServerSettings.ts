import "dotenv/config";

const settings = {
	internalPort: parseInt(process.env.FREIGHT_INTERNAL_PORT || ""),
};

export default settings;
