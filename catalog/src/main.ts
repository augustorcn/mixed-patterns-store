import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import RepositoryDatabaseFactory from "./infra/factories/RepositoryDatabaseFactory";
import UsecaseFactory from "./infra/factories/UsecaseFactory";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import HttpController from "./infra/http/HttpController";

const connection = new PgPromiseAdapter();
connection.connect();
const repositoryFactory = new RepositoryDatabaseFactory(connection);
const httpServer = new ExpressAdapter();
new HttpController(httpServer, new UsecaseFactory(repositoryFactory));
const port = 3000;
httpServer.listen(port);
console.info(`Catalog service running in port ${port}`);
