export default class Email {
	value: string;
	constructor(value: string) {
		if (!this.isValid(value)) throw new Error("Invalid email");
		this.value = value;
	}

	isValid(value: string) {
		return String(value)
			.toLocaleLowerCase()
			.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
	}
}
