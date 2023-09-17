import MongoAdapter from "./infra/database/MongoAdapter";
import RepositoryDatabaseFactory from "./infra/factories/RepositoryDatabaseFactory";
import UsecaseFactory from "./infra/factories/UsecaseFactory";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import HttpController from "./infra/http/HttpController";
import RabbitMQAdapter from "./infra/queue/RabbitMQAdapter";

const connection = new MongoAdapter();
connection.connect();
const repositoryFactory = new RepositoryDatabaseFactory(connection);
const queue = new RabbitMQAdapter();
queue.connect();
const httpServer = new ExpressAdapter();
new HttpController(httpServer, new UsecaseFactory(repositoryFactory));
const port = 3000;
httpServer.listen(port);
console.info(`Stock service running in port ${port}`);
