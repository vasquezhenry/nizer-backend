import express from "express";
import db from "../../db";
import BudgetService from "./budget_service";
import BudgetHandler from "./budget_handler";

export default (r: express.Router) => {
  const service = new BudgetService(db);

  const handler = new BudgetHandler(service);

  r.get("/budgets", (req, res) => handler.get(req, res));
  r.get("/budgets/:id", (req, res) => handler.getOne(req, res));
  r.post("/budgets",(req,res) => handler.post(req, res))

  return r;
};
