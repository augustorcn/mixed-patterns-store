import ZipcodeRepository from "./ZipcodeRepository";

export default interface RepositoryFactory {
	createZipcodeRepository(): ZipcodeRepository;
}
