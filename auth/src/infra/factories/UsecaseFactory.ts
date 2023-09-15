import Login from "../../application/usecases/Login";
import Signup from "../../application/usecases/Signup";
import Verify from "../../application/usecases/Verify";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";

export default class UsecaseFactory {
	constructor(readonly repositoryFactory: RepositoryFactory) {}

	createLogin(): Login {
		return new Login(this.repositoryFactory);
	}

	createSignup(): Signup {
		return new Signup(this.repositoryFactory);
	}

	createVerify(): Verify {
		return new Verify();
	}
}
