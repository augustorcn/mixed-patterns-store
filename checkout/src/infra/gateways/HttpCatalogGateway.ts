import CatalogGateway from "../../application/gateways/CatalogGateway";
import Product from "../../domain/entities/Product";
import IHttpClient from "../http/HttpClient";
import settings from "../config/HttpClientSettings";

export default class HttpCatalogGateway implements CatalogGateway {
	constructor(readonly httpClient: IHttpClient) {}
	async getProduct(productId: number): Promise<Product> {
		const productData = await this.httpClient.get(
			`http://${settings.catalog.host}:${settings.catalog.port}/products/${productId}`
		);
		const product = new Product(
			productData.data.id,
			productData.data.name,
			productData.data.price,
			productData.data.width,
			productData.data.height,
			productData.data.length,
			productData.data.weight,
			productData.data.volume,
			productData.data.density
		);
		return product;
	}
}
