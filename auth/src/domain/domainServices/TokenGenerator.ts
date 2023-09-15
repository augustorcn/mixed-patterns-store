import { sign, verify } from "jsonwebtoken";
import User from "../entities/User";

export default class TokenGenerator {
	EXPIRES_IN = 1000000000;
	constructor(readonly key: string) {}

	sign(user: User, date: Date): string {
		return sign(
			{
				email: user.email.value,
				iat: date.getDate(),
				expiresIn: this.EXPIRES_IN,
			},
			this.key
		);
	}

	verify(token: string): any {
		return verify(token, this.key);
	}
}
