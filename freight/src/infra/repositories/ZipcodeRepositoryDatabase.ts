import Zipcode from "../../domain/entities/Zipcode";
import ZipcodeRepository from "../../domain/repositories/ZipcodeRepository";
import DatabaseConnection from "../database/DatabaseConnection";

export default class ZipcodeRepositoryDatabase implements ZipcodeRepository {
	constructor(readonly connection: DatabaseConnection) {}
	async get(code: string): Promise<Zipcode | undefined> {
		const [zipcodeData] = await this.connection.query("SELECT * FROM zipcodes WHERE code = $1", [code]);
		if (!zipcodeData) return;
		return new Zipcode(zipcodeData.code, parseFloat(zipcodeData.lat), parseFloat(zipcodeData.long));
	}
}
