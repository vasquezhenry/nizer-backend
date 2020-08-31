import express from "express";
import AccountHandler from "./account_handler";
import TransactionRepo from "../transactions/transaction_repo";
import AccountRepo from "./account_repo";
import db from "../../db";

export default (r: express.Router) => {
  const accountRepo = new AccountRepo(db);
  const transactionRepo = new TransactionRepo(db);
  const accountHandler = new AccountHandler(accountRepo, transactionRepo);

  r.post("/accounts", (req, res) => accountHandler.post(req, res));

  r.get("/accounts/:id/transactions", (req, res) =>
    accountHandler.getTransactions(req, res)
  );
  r.patch("/accounts/:id", (req, res) => accountHandler.patch(req, res));
  r.delete("/accounts/:id", (req, res) => accountHandler.delete(req, res));
};
