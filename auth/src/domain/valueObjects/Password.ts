import { pbkdf2Sync, randomBytes } from "crypto";

export default class Password {
	private constructor(
		readonly value: string,
		readonly salt: string
	) {}

	static create(password: string): Password {
		const salt = randomBytes(20).toString("hex");
		const value = pbkdf2Sync(password, salt, 64, 100, "sha512").toString("hex");
		return new Password(value, salt);
	}

	static restore(password: string, salt: string): Password {
		return new Password(password, salt);
	}

	isValid(value: string) {
		return this.value == pbkdf2Sync(value, this.salt, 64, 100, "sha512").toString("hex");
	}
}
