import DistanceCalculator from "../../src/domain/domainServices/DistanceCalculator";
import Coordinate from "../../src/domain/valueObjects/Coordinate";

describe("distance calculator domain service", () => {
	it("should return a valid distance when the calculate method is called with a valid coordinates", async () => {
		const from = new Coordinate(-27.5945, -48.5477);
		const to = new Coordinate(-22.9129, -43.2003);
		const distance = DistanceCalculator.calculate(from, to);
		expect(distance).toBe(748.2217780081631);
	});
});
