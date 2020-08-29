import express from "express";
import morgan from "morgan";
import helmet from "helmet";

import router from "./routes"
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

router(app);


export default app;
