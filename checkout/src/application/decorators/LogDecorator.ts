import Usecase from "../usacases/Usecase";

export default class LogDecorator implements Usecase {
	constructor(readonly usecase: Usecase) {}

	async execute(input: any): Promise<any> {
		// https://www.youtube.com/watch?v=BRprc9g6j3c
		console.clear();
		console.group("Log");
		console.table(input);
		console.groupEnd();
		return this.usecase.execute(input);
	}
}
