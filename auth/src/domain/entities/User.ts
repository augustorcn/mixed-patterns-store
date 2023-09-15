import Email from "../valueObjects/Email";
import Password from "../valueObjects/Password";

export default class User {
	email: Email;

	private constructor(
		email: string,
		public password: Password
	) {
		this.email = new Email(email);
	}

	static create(email: string, password: string): User {
		return new User(email, Password.create(password));
	}

	static restore(email: string, password: string, salt: string): User {
		return new User(email, Password.restore(password, salt));
	}

	updatePassword(password: string) {
		this.password = Password.create(password);
	}

	validatePassword(password: string): boolean {
		return this.password.isValid(password);
	}
}
