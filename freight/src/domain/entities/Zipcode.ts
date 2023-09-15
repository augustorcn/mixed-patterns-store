import Coordinate from "../valueObjects/Coordinate";

export default class Zipcode {
	coordinate: Coordinate;
	constructor(
		readonly code: string,
		readonly lat: number,
		readonly long: number
	) {
		this.coordinate = new Coordinate(lat, long);
	}
}
