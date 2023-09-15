import User from "../../domain/entities/User";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import UserRepository from "../../domain/repositories/UserRepository";

export default class FakeRepositoryFactory implements RepositoryFactory {
	createUserRepository(): UserRepository {
		const users: User[] = [
			User.restore(
				"teste@teste.com",
				"25cd398e4e9f3b7d2d94ac345ad590315a0b957150ab2a8b54f30f51c8f4c8d17b5c8aeaf22c292ef3a2a411bda4a2444a735e81e3256d95f3ee32b3e62f2dd6ab3a9e01d0d62aff272b1f33e9ecb28acfcbad3e36d3b5c368b789c977ae22b68ce1e777",
				"db84e6b967543eddde99fa7ab3275780050d2b9e"
			),
			User.restore(
				"teste2@teste.com",
				"25cd398e4e9f3b7d2d94ac345ad590315a0b957150ab2a8b54f30f51c8f4c8d17b5c8aeaf22c292ef3a2a411bda4a2444a735e81e3256d95f3ee32b3e62f2dd6ab3a9e01d0d62aff272b1f33e9ecb28acfcbad3e36d3b5c368b789c977ae22b68ce1e777",
				"db84e6b967543eddde99fa7ab3275780050d2b9e"
			),
		];
		const userRepository = {
			async save(user: User): Promise<void> {},
			async get(email: string): Promise<User> {
				const user = users.find((user) => user.email.value == email);
				if (!user) throw new Error();
				return user;
			},
		};
		return userRepository;
	}
}
