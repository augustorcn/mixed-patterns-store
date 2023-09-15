export default interface FreightGateway {
	simulateFreight(input: Input): Promise<Output>;
}

export type Input = {
	itens: { volume: number; density: number; quantity: number }[];
	from?: string;
	to?: string;
};

export type Output = {
	freight: number;
};
