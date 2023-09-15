import TokenGenerator from "../../domain/domainServices/TokenGenerator";

export default class Verify {
	constructor() {}

	async execute(input: Input): Promise<Output> {
		const tokenGenerator = new TokenGenerator("secret");
		const output = tokenGenerator.verify(input.token);
		return {
			email: output.email,
		};
	}
}

type Input = {
	token: string;
};

type Output = {
	email: string;
};
