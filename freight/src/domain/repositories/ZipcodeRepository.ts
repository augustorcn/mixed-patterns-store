import Zipcode from "../entities/Zipcode";

export default interface ZipcodeRepository {
	get(code: string): Promise<Zipcode | undefined>;
}
