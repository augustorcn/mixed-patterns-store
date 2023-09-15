import Coordinate from "../valueObjects/Coordinate";

export default class DistanceCalculator {
	static calculate(from: Coordinate, to: Coordinate) {
		if (from.lat == to.lat && from.long == to.long) return 0;
		const radLat1 = (Math.PI * from.lat) / 180;
		const radLat2 = (Math.PI * to.lat) / 180;
		const theta = from.long - to.long;
		const radTheta = (Math.PI * theta) / 180;
		let distance = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
		if (distance > 1) distance = 1;
		distance = Math.acos(distance);
		distance = (distance * 180) / Math.PI;
		distance = distance * 60 * 1.1515;
		distance = distance * 1.609344;
		return distance;
	}
}
