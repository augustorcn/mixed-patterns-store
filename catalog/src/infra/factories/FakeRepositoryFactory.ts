import Product from "../../domain/entities/Product";
import ProductRepository from "../../domain/repositories/ProductRepository";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class FakeRepositoryFactory implements RepositoryFactory {
	createProductRepository(): ProductRepository {
		const products: Product[] = [
			new Product(1, "Book", 2000, 100, 30, 10, 3),
			new Product(2, "Monitor", 3000, 100, 30, 10, 3),
		];
		const productRepository = {
			async get(id: number): Promise<Product> {
				const product = products.find((product) => product.id == id);
				if (!product) throw new Error();
				return product;
			},
			async getAll(): Promise<Product[]> {
				return products;
			},
		};
		return productRepository;
	}
}
