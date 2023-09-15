import ProductRepository from "./ProductRepository";

export default interface RepositoryFactory {
	createProductRepository(): ProductRepository;
}
