import CouponRepository from "../../domain/repositories/CouponRepository";
import RepositoryFactory from "../../domain/repositories/RepositoryFactory";
import Usecase from "./Usecase";

export default class ValidateCoupon implements Usecase {
	couponRepository: CouponRepository;
	constructor(repositoryFactory: RepositoryFactory) {
		this.couponRepository = repositoryFactory.createCouponRepository();
	}

	async execute(input: Input): Promise<Output> {
		let output: Output = {
			isValid: false,
		};
		if (input.code) {
			const coupon = await this.couponRepository.get(input.code);
			if (coupon) {
				output.isValid = coupon.isValid(new Date());
			}
		}
		return output;
	}
}

type Input = {
	code: string;
};

type Output = {
	isValid: boolean;
};
