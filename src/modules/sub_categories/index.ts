import express from "express";
import SubCategoryRepo from "./sub_category_repo";
import SubCategoryHandler from "./sub_category_handler";
import db from "../../db";

export default (r: express.Router) => {
  const subCategoryRepo = new SubCategoryRepo(db);
  const subCategoryHandler = new SubCategoryHandler(subCategoryRepo);

  r.patch("/sub-categories/:subCategoryId", (req, res) =>
    subCategoryHandler.patch(req, res)
  );

  r.delete("/sub-categories/:subCategoryId", (req, res) =>
    subCategoryHandler.delete(req, res)
  );

  return r;
};
