import express from "express";
import AccountHandler from "./account_handler";
import AccountRepo from "./account_repo";
import db from "../../db";

export default (r: express.Router) => {
  const accountRepo = new AccountRepo(db);
  const accountHandler = new AccountHandler(accountRepo);

  r.patch("/accounts/:id", (req, res) => accountHandler.patch(req, res));
  r.delete("/accounts/:id", (req, res) => accountHandler.delete(req, res));
};
