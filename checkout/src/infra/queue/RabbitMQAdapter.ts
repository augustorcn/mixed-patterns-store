import Queue from "./Queue";
import amqp from "amqplib";

export default class RabbitMQAdapter implements Queue {
	connection: any;

	constructor() {}

	async connect(): Promise<void> {
		this.connection = await amqp.connect("amqp://admin:admin@rabbitmq:5672");
	}
	async consume(queueName: string, callback: Function): Promise<void> {
		const channel = await this.connection.createChannel();
		await channel.assertQueue(queueName, { durable: true });
		channel.consume(queueName, async (msg: any) => {
			const input = JSON.parse(msg.content.toString());
			await callback(input);
			channel.ack(msg);
		});
	}
	async publish(queueName: string, data: any): Promise<void> {
		const channel = await this.connection.createChannel();
		await channel.assertQueue(queueName, { durable: true });
		await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
	}
}
