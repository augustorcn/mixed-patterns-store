import StockEntry from "../entities/StockEntry";

export default class StockCalculator {
	static calculate(stockEntries: StockEntry[]): number {
		let total = 0;
		for (const stockEntry of stockEntries) {
			if (stockEntry.operation == "in")
				total += stockEntry.quantity;
			if (stockEntry.operation == "out")
				total -= stockEntry.quantity;
		}

		return total;
	}
}
