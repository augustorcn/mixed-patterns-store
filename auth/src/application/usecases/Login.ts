import IUserRepository from "../../domain/repositories/UserRepository";
import IRepositoryFactory from "../../domain/repositories/RepositoryFactory";
import TokenGenerator from "../../domain/domainServices/TokenGenerator";

export default class Login {
	userRepository: IUserRepository;
	constructor(readonly repositoryFactory: IRepositoryFactory) {
		this.userRepository = repositoryFactory.createUserRepository();
	}

	async execute(input: Input): Promise<Output> {
		const user = await this.userRepository.get(input.email);
		if (!user.validatePassword(input.password)) throw new Error("Authentication failed");
		const tokenGenerator = new TokenGenerator("secret");
		return { token: tokenGenerator.sign(user, new Date(input.date)) };
	}
}

type Input = {
	email: string;
	password: string;
	date: string;
};

type Output = {
	token: string;
};
