import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import Zipcode from "../../domain/entities/Zipcode";
import ZipcodeRepository from "../../domain/repositories/ZipcodeRepository";

export default class FakeRepositoryFactory implements RepositoryFactory {
	createZipcodeRepository(): ZipcodeRepository {
		const zipcodes: Zipcode[] = [new Zipcode("10101010", 1010, 1010), new Zipcode("20202020", 2020, 2020)];
		const zipcodeRepository = {
			async get(code: string): Promise<any | undefined> {
				const zipcode = zipcodes.find((zipcode) => zipcode.code == code);
				if (!zipcode) return;
				return zipcode;
			},
		};

		return zipcodeRepository;
	}
}
