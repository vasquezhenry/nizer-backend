import knex from "knex";
import Category from "./category";

export default class CategoryRepo {
  constructor(private db: knex) {}

  async update(categoryId: string, category: Partial<Category>) {
    try {
      const updated = await this.db
        .update({ name: category.name }, "*")
        .from("category")
        .where("id", categoryId);
      return updated;
    } catch (err) {
      throw err;
    }
  }

  async remove(categoryId: string) {
    try {
      const removed = await this.db
        .delete()
        .where("id", categoryId)
        .from("category");

      return removed;
    } catch (err) {
      throw err;
    }
  }

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

  async insert(category: Partial<Category>) {
    try {
      const newCategory = await this.db.insert(category, "*").into("category");
      return newCategory[0];
    } catch (err) {
      throw err;
    }
  }
}
