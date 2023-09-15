import ValidateCoupon from "../../src/application/usacases/ValidateCoupon";
import RepositoryFactory from "../../src/domain/repositories/RepositoryFactory";
import FakeRepositoryFactory from "../../src/infra/factories/FakeRepositoryFactory";

describe("validate coupon usecase", () => {
	let repositoryFactory: RepositoryFactory;
	let validateCoupon: ValidateCoupon;
	beforeAll(() => {
		repositoryFactory = new FakeRepositoryFactory();
		validateCoupon = new ValidateCoupon(repositoryFactory);
	});
	it("should set a true value in isValid property when the ValidateCoupon usecase is build with a valid coupon and the execute method is called", async () => {
		const input = {
			code: "DISC10",
		};
		const output = await validateCoupon.execute(input);
		const isValid = output.isValid;
		expect(isValid).toBe(true);
	});
	it("should set a false value in isValid property when the ValidateCoupon usecase is build with a inexistent coupon and the execute method is called", async () => {
		const input = {
			code: "DISC100",
		};
		const output = await validateCoupon.execute(input);
		const isValid = output.isValid;
		expect(isValid).toBe(false);
	});
	it("should set a false value in isValid property when the ValidateCoupon usecase is build with a expirated coupon and the execute method is called", async () => {
		const input = {
			code: "EXPIRATED10",
		};
		const output = await validateCoupon.execute(input);
		const isValid = output.isValid;
		expect(isValid).toBe(false);
	});
});
