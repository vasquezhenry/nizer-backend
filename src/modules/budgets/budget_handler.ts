import { Request, Response } from "express";
import BudgetService from "./budget_service";

export default class BudgetHandler {
  constructor(private service: BudgetService) {}

  async post(req:Request,res:Response) {
    try{
      const budget = req.body;
      const id = await this.service.insert(budget)
      return res.status(200).json(id);
    }catch(err){
      console.log(err)
      return res.status(400).json("Cannot post budget")
    }
  }

  async get(req: Request, res: Response) {
    try {
      const budgets = await this.service.find();
      return res.status(200).json(budgets)
    } catch (err) {
      console.log(err);
      return res.status(400).json("Something went wrong...");
    }
  }

  async getOne(req:Request, res:Response) {
    try{
      const id = req.params.id;
      const budget = await this.service.findOne(id);
      return res.status(200).json(budget)
    }catch(err){
      console.log(err);
      return res.status(400).json("Something went wrong...")
    }
  }
}
