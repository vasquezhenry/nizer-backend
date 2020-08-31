import { Request, Response } from "express";
import TransactionRepo from "./transaction_repo";

export default class TransactionHandler {
  constructor(private transactionRepo: TransactionRepo) {}

  async post(req: Request, res: Response) {
    try {
      const transaction = req.body;
      const added = await this.transactionRepo.insert(transaction);
      return res.status(200).json(added);
    } catch (err) {
      return res.status(400).json("Could not post transaction");
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const transactionId = req.params.id;
      const transaction = req.body;

      const updated = await this.transactionRepo.update(
        transactionId,
        transaction
      );
      return res.status(200).json(updated);
    } catch (err) {
      return res.status(400).json("Could not patch transaction");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const transactionId = req.params.id;
      const deleted = await this.transactionRepo.remove(transactionId);
      return res.status(200).json(deleted);
    } catch (err) {
      return res.status(400).json("Could not delete transaction");
    }
  }
}
