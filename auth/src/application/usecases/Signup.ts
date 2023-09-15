import User from "../../domain/entities/User";
import IUserRepository from "../../domain/repositories/UserRepository";
import IRepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class Signup {
	userRepository: IUserRepository;
	constructor(readonly repositoryFactory: IRepositoryFactory) {
		this.userRepository = repositoryFactory.createUserRepository();
	}
	async execute(input: Input): Promise<void> {
		const user = User.create(input.email, input.password);
		await this.userRepository.save(user);
	}
}

type Input = {
	email: string;
	password: string;
};
