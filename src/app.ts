import express from "express";
import morgan from "morgan";
import helmet from "helmet";

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(helmet());
app.use("/api", routes);

app.use(morgan("dev"));

export default app;
