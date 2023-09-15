export default class FreightCalculator {
	static calculate(distanse: number, volume: number, density: number): number {
		let freight = volume * distanse * (density / 100);
		return Math.max(10, freight);
	}
}
