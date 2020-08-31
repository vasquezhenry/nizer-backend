import { Request, Response } from "express";
import CategoryRepo from "./category_repo";

export default class CategoryHandler {
  constructor(private categoryRepo: CategoryRepo) {}

  async patch(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const category = req.body;
      const patched = this.categoryRepo.update(id, category);
      return res.status(200).json(patched);
    } catch (err) {
      return res.status(400).json("could not patch category");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deleted = this.categoryRepo.remove(id);
      return res.status(200).json(deleted);
    } catch (err) {
      return res.status(400).json("could not delete category");
    }
  }
}
