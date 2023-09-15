export default class Item {
	constructor(
		readonly productId: number,
		readonly price: number,
		readonly quantity: number
	) {
		if (this.quantity <= 0) throw new Error("Invalid Quantity");
	}

	getTotal(): number {
		return this.price * this.quantity;
	}
}
