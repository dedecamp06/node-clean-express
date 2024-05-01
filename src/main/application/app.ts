import express, { Express } from "express";
import { routes } from "./routes";
import { connectDB } from "../../infra/mongodb/config/config";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const app: Express = express();
const swaggerDocumentPath = path.join(__dirname, 'docs', 'swagger.yaml');
const swaggerDocument = YAML.load(swaggerDocumentPath);

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(routes);

(async () => {
  await connectDB();
})();

export { app };
