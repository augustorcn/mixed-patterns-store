import UserRepository from "./UserRepository";

export default interface IRepositoryFactory {
	createUserRepository(): UserRepository;
}
