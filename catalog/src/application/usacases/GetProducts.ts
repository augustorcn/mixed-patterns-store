import ProductRepository from "../../domain/repositories/ProductRepository";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class GetProducts {
	productRepository: ProductRepository;
	constructor(repositoryFactory: RepositoryFactory) {
		this.productRepository = repositoryFactory.createProductRepository();
	}

	async execute(): Promise<Output[]> {
		const products = await this.productRepository.getAll();
		const output: Output[] = [];
		for (const product of products) {
			output.push({
				name: product.name,
				price: product.price,
				productId: product.id,
			});
		}
		return output;
	}
}

type Output = {
	productId: number;
	name: string;
	price: number;
};
