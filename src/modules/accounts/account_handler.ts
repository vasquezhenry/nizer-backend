import AccountRepo from "./account_repo";
import { Request, Response } from "express";

export default class AccountHandler {
  constructor(private accountRepo: AccountRepo) {}

  async patch(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const account = req.body;
      const updated = await this.accountRepo.update(id, account);
      return res.status(200).json(updated);
    } catch (err) {
      return res.status(400).json("cannot patch account");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deleted = await this.accountRepo.remove(id);
      return res.status(200).json(deleted);
    } catch (err) {
      return res.status(400).json("cannot delete account");
    }
  }
}
