import { Request, Response } from "express";
import SubCategoryRepo from "./sub_category_repo";

export default class SubCategoryHandler {
  constructor(private subCategoryRepo: SubCategoryRepo) {}

  async patch(req: Request, res: Response) {
    try {
      const subCategoryId = req.params.subCategoryId;
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
    } catch (err) {
      return res.status(400).json("Could not delete subcategory");
    }
  }
}
