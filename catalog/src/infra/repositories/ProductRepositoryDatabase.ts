import Product from "../../domain/entities/Product";
import ProductRepository from "../../domain/repositories/ProductRepository";
import DatabaseConnection from "../database/DatabaseConnection";

export default class ProductRepositoryDatabase implements ProductRepository {
	constructor(readonly connection: DatabaseConnection) {}
	async getAll(): Promise<Product[]> {
		let products: Product[] = [];
		const productsData = await this.connection.query("select * from products;", []);
		for (const productData of productsData)
			[
				products.push(
					new Product(
						productData.id,
						productData.name,
						productData.price,
						productData.width,
						productData.height,
						productData.length,
						productData.weight
					)
				),
			];
		return products;
	}
	async get(id: number): Promise<Product> {
		const [productData] = await this.connection.query("select * from products where id = $1", [id]);
		return new Product(
			productData.id,
			productData.name,
			productData.price,
			productData.width,
			productData.height,
			productData.length,
			productData.weight
		);
	}
}
