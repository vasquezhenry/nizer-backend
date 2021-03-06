import express from "express";
import db from "../../db";
import BudgetRepo from "./budget_repo";
import BudgetHandler from "./budget_handler";
import AccountRepo from "../accounts/account_repo";
import CategoryRepo from "../categories/category_repo";

export default (r: express.Router) => {
  const budgetRepo = new BudgetRepo(db);
  const accountRepo = new AccountRepo(db);
  const categoryRepo = new CategoryRepo(db);

  const handler = new BudgetHandler(
    budgetRepo,
    accountRepo,
    categoryRepo,
  );

  r.get("/budgets", (req, res) => handler.get(req, res));
  r.get("/budgets/:id", (req, res) => handler.getOne(req, res));
  r.post("/budgets", (req, res) => handler.post(req, res));
  r.delete("/budgets/:id", (req, res) => handler.delete(req, res));
  r.put("/budgets/:id", (req, res) => handler.put(req, res));

  r.get("/budgets/:id/accounts", (req, res) => handler.getAccounts(req, res));

  r.get("/budgets/:id/categories", (req, res) =>
    handler.getCategories(req, res)
  );


  return r;
};
