import UsecaseFactory from "../factories/UsecaseFactory";
import Queue from "./Queue";

export default class QueueController {
	constructor(
		readonly queue: Queue,
		readonly usecaseFactory: UsecaseFactory
	) {
		queue.consume("orderPlaced", async (input: any) => {
			const decreaseStock = usecaseFactory.createDecreaseStock();
			decreaseStock.execute(input);
		});
	}
}
