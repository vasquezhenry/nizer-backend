import knex from "knex";
import Budget from "./budget";

export default class BudgetService {
  constructor(private db: knex) {}

  async find(): Promise<Budget[]> {
    try {
      const budgets = await this.db.select("*").from("Budget");
      return budgets;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async findOne(id: string): Promise<Budget> {
    try {
      const budget = await this.db
        .select("*")
        .first()
        .from("Budget")
        .where("id", id);
      return budget;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async insert(budget:Partial<Budget>):Promise<any>{
    try{
      const id = await this.db<Budget>("Budget").insert(budget,["id"])
      return id;
    }catch(err){
      throw err;
    }
  }
}
