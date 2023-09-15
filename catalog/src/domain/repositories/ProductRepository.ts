import Product from "../entities/Product";

export default interface ProductRepository {
	get(id: number): Promise<Product>;
	getAll(): Promise<Product[]>;
}
