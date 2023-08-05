import * as dotenv from "dotenv";
import Calculadora from "./calculadora/calculadora.controller";
import App from "./app";
import Authentication from "./authentication/auth.controller";

dotenv.config();

const app = new App([
    new Calculadora(),
    new Authentication()
]);

app.startServer();
