import knex from "knex";
import Category from "./category";

export default class CategoryRepo {
  constructor(private db: knex) {}

  async findByBudgetId(budgetId: string) {
    try {
      const categories = await this.db
        .select("*")
        .from("category")
        .where("budgetId", budgetId);

      return categories;
    } catch (err) {
      throw err;
    }
  }

  async insert(budgetId: string, category: Partial<Category>) {
    try {
      const newCategory = await this.db
        .insert(
          {
            budgetId,
            name: category.name,
          },
          "*"
        )
        .into("category");
      return newCategory[0];
    } catch (err) {
      throw err;
    }
  }
}
