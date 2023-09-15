export default class Coupon {
	constructor(
		readonly code: string,
		readonly percentage: number,
		readonly expireDate: Date
	) {}

	isValid(today: Date): boolean {
		return this.expireDate.getTime() >= today.getTime();
	}

	calculateDiscount(value: number): number {
		return (value * this.percentage) / 100;
	}
}
