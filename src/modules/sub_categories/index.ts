import express from "express";
import SubCategoryRepo from "./sub_category_repo";
import SubCategoryHandler from "./sub_category_handler";
import TransactionRepo from "../transactions/transaction_repo";
import db from "../../db";

export default (r: express.Router) => {
  const subCategoryRepo = new SubCategoryRepo(db);
  const transactionRepo = new TransactionRepo(db);

  const subCategoryHandler = new SubCategoryHandler(
    subCategoryRepo,
    transactionRepo
  );

  r.post("/sub-categories", (req, res) => subCategoryHandler.post(req, res));

  r.get("/sub-categories/:id", (req, res) =>
    subCategoryHandler.getTransactions(req, res)
  );

  r.patch("/sub-categories/:id", (req, res) =>
    subCategoryHandler.patch(req, res)
  );

  r.delete("/sub-categories/:id", (req, res) =>
    subCategoryHandler.delete(req, res)
  );

  return r;
};
