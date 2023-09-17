import StockCalculator from "../../src/domain/domainServives/StockCalculator";
import StockEntry from "../../src/domain/entities/StockEntry";

describe("StockCalculator domainService", () => {
	it("should return the calculated stock when the calculate method is called with valid parameters", async () => {
		const stockEntries = [new StockEntry(1, "in", 1), new StockEntry(1, "in", 1), new StockEntry(1, "out", 1)];
		const total = StockCalculator.calculate(stockEntries);
		expect(total).toBe(1);
	});
});
