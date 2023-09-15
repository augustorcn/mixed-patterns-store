import User from "../../domain/entities/User";
import UserRepository from "../../domain/repositories/UserRepository";
import DatabaseConnection from "../database/DatabaseConnection";

export default class UserRepositoryDatabase implements UserRepository {
	constructor(readonly connection: DatabaseConnection) {}
	async save(user: User): Promise<void> {
		await this.connection.query("INSERT INTO users (email, password, salt) VALUES ($1, $2, $3)", [
			user.email.value,
			user.password.value,
			user.password.salt,
		]);
	}
	async get(email: string): Promise<User> {
		const [userData] = await this.connection.query("SELECT * FROM users WHERE email = $1 LIMIT 1", [email]);
		return User.restore(userData.email, userData.password, userData.salt);
	}
}
