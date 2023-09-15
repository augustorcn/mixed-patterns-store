export default interface AuthGateway {
	verify(token: string): any;
}
