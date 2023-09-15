export default class Cpf {
	MAX_LENGTH: number = 14;
	MIN_LENGTH: number = 11;
	FIRST_DIGIT_FACTOR: number = 10;
	SECOND_DIGIT_FACTOR: number = 11;
	INVALID_CPF_ERROR_MESSAGE: string = "Invalid Cpf";

	private value: string;

	constructor(value: string) {
		if (!this.isValid(value)) throw new Error(this.INVALID_CPF_ERROR_MESSAGE);
		this.value = value;
	}

	isNull(value: string): boolean {
		if (value === undefined) return false;
		if (value === "") return false;
		return true;
	}

	haveValidLength(cpf: string): boolean {
		if (cpf.length < this.MIN_LENGTH) return false;
		if (cpf.length > this.MAX_LENGTH) return false;
		return true;
	}

	removeNonNumbersCharacters(cpf: string): string {
		return cpf.replace(/\D+/g, "");
	}

	findVerificatorDigit(cpf: string, factor: number): number {
		let total = 0;
		for (const digit of cpf) {
			if (factor <= 1) continue;
			total += parseInt(digit) * factor--;
		}
		let rest = total % 11;
		return rest < 2 ? 0 : 11 - rest;
	}

	removeVerificatorDigits(cpf: string): string {
		return cpf.slice(0, -2);
	}

	isValid(cpf: string): boolean {
		if (!this.isNull(cpf)) return false;
		if (!this.haveValidLength(cpf)) return false;
		cpf = this.removeNonNumbersCharacters(cpf);
		let firstVerificatorDigit = this.findVerificatorDigit(cpf, this.FIRST_DIGIT_FACTOR);
		let secondVerificatorDigit = this.findVerificatorDigit(cpf, this.SECOND_DIGIT_FACTOR);
		return `${this.removeVerificatorDigits(cpf)}${firstVerificatorDigit}${secondVerificatorDigit}` === cpf;
	}

	getValue(): string {
		return this.value;
	}
}
