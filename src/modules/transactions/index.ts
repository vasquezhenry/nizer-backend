import express from "express";
import TransactionRepo from "./transaction_repo";
import TransactionHandler from "./transaction_handler";
import db from "../../db";

export default (r: express.Router) => {
  const transactionRepo = new TransactionRepo(db);
  const transactionHandler = new TransactionHandler(transactionRepo);

  r.patch("/transactions/:transactionId", (req, res) =>
    transactionHandler.patch(req, res)
  );

  r.delete("/transactions/:transactionId", (req, res) =>
    transactionHandler.delete(req, res)
  );

  return r;
};
