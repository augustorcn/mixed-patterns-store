import Product from "../../domain/entities/Product";

export default interface CatalogGateway {
	getProduct(productId: number): Promise<Product>;
}

export type Output = {
	freight: number;
};
