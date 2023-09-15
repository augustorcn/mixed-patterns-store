import Order from "../../domain/entities/Order";
import CouponRepository from "../../domain/repositories/CouponRepository";
import OrderRepository from "../../domain/repositories/OrderRepository";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import Queue from "../../infra/queue/Queue";
import CatalogGateway from "../gateways/CatalogGateway";
import FreightGateway from "../gateways/FreightGateway";
import GatewayFactory from "../gateways/GatewayFactory";
import Usecase from "./Usecase";

export default class Checkout implements Usecase {
	orderRepository: OrderRepository;
	couponRepository: CouponRepository;
	catalogGateway: CatalogGateway;
	freightGateway: FreightGateway;

	constructor(
		repositoryFactory: RepositoryFactory,
		gatewayFactory: GatewayFactory,
		readonly queue?: Queue
	) {
		this.orderRepository = repositoryFactory.createOrderRepository();
		this.couponRepository = repositoryFactory.createCouponRepository();
		this.catalogGateway = gatewayFactory.createCatalogGateway();
		this.freightGateway = gatewayFactory.createFreightGateway();
	}

	async execute(input: Input): Promise<Output> {
		const sequence = await this.orderRepository.count();
		const order = new Order(input.id, input.cpf, new Date(), sequence + 1);
		const inputFreight: any = {
			itens: [],
			from: input.from,
			to: input.to,
		};
		for (const item of input.itens) {
			const product = await this.catalogGateway.getProduct(item.id);
			order.addItem(product, item.quantity);
			inputFreight.itens.push({
				volume: product.volume,
				density: product.density,
				quantity: item.quantity,
			});
		}
		const outputFreight = await this.freightGateway.simulateFreight(inputFreight);
		order.freight = outputFreight.freight;
		if (input.coupon) {
			const coupon = await this.couponRepository.get(input.coupon);
			order.addCoupon(coupon);
		}
		await this.orderRepository.save(order);
		if (this.queue) this.queue.publish("orderPlaced", order);
		return {
			freight: order.freight,
			total: order.getTotal(),
		};
	}
}

type Input = {
	id: string;
	cpf: string;
	itens: { id: number; quantity: number }[];
	coupon: string;
	from: string;
	to: string;
	date?: Date;
	token?: string;
};

type Output = {
	total: number;
	freight: number;
};
