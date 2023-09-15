import ProductRepository from "../../domain/repositories/ProductRepository";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class GetProduct {
	productRepository: ProductRepository;
	constructor(repositoryFactory: RepositoryFactory) {
		this.productRepository = repositoryFactory.createProductRepository();
	}

	async execute(id: number): Promise<Output> {
		const product = await this.productRepository.get(id);
		return {
			id: product.id,
			name: product.name,
			price: product.price,
			height: product.height,
			width: product.width,
			length: product.length,
			weight: product.length,
			density: product.getDensity(),
			volume: product.getVolume(),
		};
	}
}

type Output = {
	id: number;
	name: string;
	price: number;
	width: number;
	height: number;
	length: number;
	weight: number;
	density: number;
	volume: number;
};
