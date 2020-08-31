import { Request, Response } from "express";
import AccountRepo from "../accounts/account_repo";
import CategoryRepo from "../categories/category_repo";
import BudgetRepo from "./budget_repo";

export default class BudgetHandler {
  constructor(
    private budgetRepo: BudgetRepo,
    private accountRepo: AccountRepo,
    private categoryRepo: CategoryRepo
  ) {}

  async getCategories(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const categories = await this.categoryRepo.findByBudgetId(id);

      return res.status(200).json(categories);
    } catch (err) {
      return res.status(400).json("Cannot get categories");
    }
  }

  async getAccounts(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const accounts = await this.accountRepo.findByBudgetId(id);
      return res.status(200).json(accounts);
    } catch (err) {
      return res.status(400).json("Cannot get accounts");
    }
  }

  async put(req: Request, res: Response) {
    try {
      const budget = req.body;
      const id = req.params.id;
      const updated = await this.budgetRepo.update(id, budget);
      return res.status(200).json(updated);
    } catch (err) {
      return res.status(400).json("Cannot put budget");
    }
  }

  async post(req: Request, res: Response) {
    try {
      const budget = req.body;
      const id = await this.budgetRepo.insert(budget);
      return res.status(200).json(id);
    } catch (err) {
      console.log(err);
      return res.status(400).json("Cannot post budget");
    }
  }

  async get(req: Request, res: Response) {
    try {
      const userId = req.query.userId as string;
      if (userId) {
        const budgets = await this.budgetRepo.findByUserId(userId);
        return res.status(200).json(budgets);
      }

      const budgets = await this.budgetRepo.find();
      return res.status(200).json(budgets);
    } catch (err) {
      console.log(err);
      return res.status(400).json("Something went wrong...");
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const budget = await this.budgetRepo.findOne(id);
      return res.status(200).json(budget);
    } catch (err) {
      console.log(err);
      return res.status(400).json("Something went wrong...");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const budget = await this.budgetRepo.remove(id);
      return res.status(200).json(budget);
    } catch (err) {
      console.log(err);
      return res.status(400).json("Could not delete budget");
    }
  }
}
