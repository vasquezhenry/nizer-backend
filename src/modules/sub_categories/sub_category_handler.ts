import { Request, Response } from "express";
import TransactionRepo from "../transactions/transaction_repo";
import SubCategoryRepo from "./sub_category_repo";

export default class SubCategoryHandler {
  constructor(
    private subCategoryRepo: SubCategoryRepo,
    private transactionsRepo: TransactionRepo
  ) {}

  async post(req: Request, res: Response) {
    try {
      const subCategory = req.body;
      const added = await this.subCategoryRepo.insert(subCategory);
      return res.status(200).json(added);
    } catch (err) {
      return res.status(400).json("could not post sub category");
    }
  }

  async getTransactions(req: Request, res: Response) {
    try {
      const subCategoryId = req.params.id;
      const transactions = await this.transactionsRepo.findBySubCategoryId(
        subCategoryId
      );
      return res.status(200).json(transactions);
    } catch (err) {
      return res.status(400).json("Could not get transactions");
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const subCategoryId = req.params.id;
      const subCategory = req.body;

      const updated = await this.subCategoryRepo.update(
        subCategoryId,
        subCategory
      );

      return res.status(200).json(updated);
    } catch (err) {
      return res.status(400).json("Could not patch subcategory");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const subCategoryId = req.params.id;
      const deleted = await this.subCategoryRepo.remove(subCategoryId);
      return res.status(200).json(deleted);
    } catch (err) {
      return res.status(400).json("Could not delete subcategory");
    }
  }
}
