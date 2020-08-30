import knex from "knex";
import SubCategory from "./sub_category";
export default class SubCategoryRepo {
  constructor(private db: knex) {}

  async findByCategoryId(categoryId: string) {
    try {
      const subCategories = await this.db
        .select("*")
        .from("sub-category")
        .where("categoryId", categoryId);
      return subCategories;
    } catch (err) {
      throw err;
    }
  }

  async insert(categoryId: string, subCategory: Partial<SubCategory>) {
    try {
      const newSubCategory = await this.db
        .insert(
          {
            categoryId: categoryId,
            name: subCategory.name,
            spent: subCategory.spent,
            available: subCategory.available,
            budgeted: subCategory.budgeted
          },
          "*"
        )
        .into("sub-category");

      return newSubCategory[0];
    } catch (err) {
      throw err;
    }
  }
}
