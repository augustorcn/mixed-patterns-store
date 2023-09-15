import AuthGateway from "../../application/gateways/AuthGateway";
import CatalogGateway from "../../application/gateways/CatalogGateway";
import FreightGateway from "../../application/gateways/FreightGateway";
import GatewayFactory from "../../application/gateways/GatewayFactory";
import Product from "../../domain/entities/Product";

export default class FakeGatewayFactory implements GatewayFactory {
	createAuthGateway(): AuthGateway {
		const authOutput = {
			token: "teste",
		};
		const authGateway = {
			async verify(token: string): Promise<any> {
				return authOutput;
			},
		};
		return authGateway;
	}
	createCatalogGateway(): CatalogGateway {
		const products: Product[] = [
			new Product(1, "Book", 2000, 100, 30, 10, 3),
			new Product(2, "Monitor", 3000, 100, 30, 10, 3),
		];
		const catalogGateway = {
			async getProduct(productId: number): Promise<Product> {
				const productData = products.find((product) => product.id == productId);
				if (!productData) throw new Error();
				const product = new Product(
					productData.id,
					productData.name,
					productData.price,
					productData.width,
					productData.height,
					productData.length,
					productData.weight,
					productData.volume,
					productData.density
				);
				return product;
			},
		};

		return catalogGateway;
	}
	createFreightGateway(): FreightGateway {
		const freightGateway = {
			async simulateFreight(input: any): Promise<any> {
				return { freight: 10 };
			},
		};
		return freightGateway;
	}
}
