import Coupon from "./Coupon";
import Cpf from "../valueObjects/Cpf";
import Item from "./Item";
import Product from "./Product";

export default class Order {
	cpf: Cpf;
	itens: Item[];
	code: string;
	freight: number = 0;
	coupon?: Coupon;
	constructor(
		readonly id: string,
		cpf: string,
		readonly date: Date = new Date(),
		readonly sequence: number = 1
	) {
		this.cpf = new Cpf(cpf);
		this.itens = [];
		this.code = `${this.date.getFullYear()}${new String(this.sequence).padStart(8, "0")}`;
	}

	getTotal(): number {
		let total = 0;
		for (const item of this.itens) {
			total += item.getTotal();
		}
		if (this.coupon) total -= this.coupon.calculateDiscount(total);
		total += this.freight;
		return total;
	}

	addItem(product: Product, quantity: number): void {
		if (this.itens.some((item) => item.productId == product.id)) throw new Error("Duplicated Item");
		this.itens.push(new Item(product.id, product.price, quantity));
	}

	addCoupon(coupon: Coupon): void {
		if (coupon && coupon.isValid(this.date)) {
			this.coupon = coupon;
		}
	}
}
