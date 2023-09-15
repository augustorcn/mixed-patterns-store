export default class Product {
	constructor(
		readonly id: number,
		readonly name: string,
		readonly price: number,
		readonly width: number,
		readonly height: number,
		readonly length: number,
		readonly weight: number
	) {
		this.validate();
	}

	getVolume(): number {
		const volume = ((((this.width / 100) * this.height) / 100) * this.length) / 100;
		return volume;
	}

	getDensity(): number {
		const density = this.weight / this.getVolume();
		return density;
	}

	validate(): void {
		if (!this.dimensionsIsValid()) throw new Error("Invalid Dimensions");
		if (!this.weightIsValid()) throw new Error("Invalid Weight");
	}

	dimensionsIsValid(): boolean {
		return this.width > 0 && this.height > 0 && this.length > 0;
	}

	weightIsValid(): boolean {
		return this.weight > 0;
	}
}
