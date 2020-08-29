import { Router } from "express";
import budgets from "./modules/budgets";
import {Application} from "express"

export default (app:Application) => {
  const router = Router();

  budgets(router);

  app.use("/api",router)
  return app;
};
