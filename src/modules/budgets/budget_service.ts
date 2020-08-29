import knex from "knex";
import Budget from "./budget";

export default class BudgetService {
  constructor(private db: knex) {}

  async remove(id: string) {
    try {
      await this.db
        .delete()
        .where("id", id)
        .from("Budget");
    } catch (err) {
      throw err;
    }
  }

  /**
   * Return all budgets
   */
  async find(): Promise<Budget[]> {
    try {
      const budgets = await this.db.select("*").from("Budget");
      return budgets;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  /**
   * Given an ID return budget with corresponding ID
   */
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

  async findByUserId(userId: string): Promise<Budget[]> {
    try {
      const budgets = await this.db
        .select("*")
        .from("Budget")
        .where("userId", userId);
      return budgets;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Given a budget insert into DB and return the inserted budget
   */
  async insert(budget: Partial<Budget>): Promise<any> {
    try {
      const newBudget = await this.db<Budget>("Budget").insert(budget, "*");
      return newBudget[0];
    } catch (err) {
      throw err;
    }
  }
}
