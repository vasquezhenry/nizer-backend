import { Router } from "express";
import budgets from "./modules/budgets";
import accounts from "./modules/accounts";
import categories from "./modules/categories";
import subCategories from "./modules/sub_categories";
import transactions from "./modules/transactions";
import { Application } from "express";

export default (app: Application) => {
  const router = Router();

  budgets(router);
  accounts(router);
  categories(router);
  subCategories(router);
  transactions(router);

  app.use("/api", router);
  return app;
};
