import MongoAdapter from "./infra/database/MongoAdapter";
import RepositoryDatabaseFactory from "./infra/factories/RepositoryDatabaseFactory";
import UsecaseFactory from "./infra/factories/UsecaseFactory";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import HttpController from "./infra/http/HttpController";
import QueueController from "./infra/queue/QueueController";
import RabbitMQAdapter from "./infra/queue/RabbitMQAdapter";
import settings from "./infra/config/HttpServerSettings";

const connection = new MongoAdapter();
connection.connect();
const repositoryFactory = new RepositoryDatabaseFactory(connection);
const queue = new RabbitMQAdapter();
queue.connect();
const usecaseFactory = new UsecaseFactory(repositoryFactory);
const httpServer = new ExpressAdapter();
new HttpController(httpServer, usecaseFactory);
const port = settings.internalPort;
httpServer.listen(port);
console.info(`Stock service running in port ${port}`);
// new QueueController(queue, usecaseFactory);
