import "dotenv/config";

const settings = {
	internalPort: parseInt(process.env.CHECKOUT_INTERNAL_PORT || ""),
};

export default settings;
