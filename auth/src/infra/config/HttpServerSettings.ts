import "dotenv/config";

const settings = {
	internalPort: parseInt(process.env.AUTH_INTERNAL_PORT || ""),
};

export default settings;
