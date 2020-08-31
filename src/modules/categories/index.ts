import express from "express";
import CategoryRepo from "./category_repo";
import CategoryHandler from "./category_handler";
import db from "../../db";

export default (r: express.Router) => {
  const categoryRepo = new CategoryRepo(db);
  const categoryHandler = new CategoryHandler(categoryRepo);

  r.post("/categories", (req, res) => categoryHandler.post(req, res));
  r.patch("/categories/:id", (req, res) => categoryHandler.patch(req, res));
  r.delete("/categories/:id", (req, res) => categoryHandler.delete(req, res));
  return r;
};
