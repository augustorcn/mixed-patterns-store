import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import RepositoryDatabaseFactory from "./infra/factories/RepositoryDatabaseFactory";
import UsecaseFactory from "./infra/factories/UsecaseFactory";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import HttpController from "./infra/http/HttpController";
import settings from "./infra/config/HttpServerSettings";

const connection = new PgPromiseAdapter();
connection.connect();
const repositoryFactory = new RepositoryDatabaseFactory(connection);
const httpServer = new ExpressAdapter();
new HttpController(httpServer, new UsecaseFactory(repositoryFactory));
const port = settings.internalPort;
httpServer.listen(port);
console.info(`Freight service running in port ${port}`);
