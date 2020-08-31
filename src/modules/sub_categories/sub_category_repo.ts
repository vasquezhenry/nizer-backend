import knex from "knex";
import SubCategory from "./sub_category";
export default class SubCategoryRepo {
  constructor(private db: knex) {}

  async update(subCategoryId: string, subCategory: Partial<SubCategory>) {
    try {
      const updated = await this.db
        .update(
          {
            name: subCategory.name,
            spent: subCategory.spent,
            available: subCategory.available,
            budgeted: subCategory.budgeted
          },
          "*"
        )
        .from("sub-category")
        .where("id", subCategoryId);

      return updated;
    } catch (err) {
      throw err;
    }
  }

  async remove(subCategoryId: string) {
    try {
      const deleted = await this.db
        .delete()
        .from("sub-category")
        .where("id", subCategoryId);

      return deleted;
    } catch (err) {
      throw err;
    }
  }

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

  async insert(subCategory: Partial<SubCategory>) {
    try {
      const newSubCategory = await this.db
        .insert(subCategory, "*")
        .into("sub-category");

      return newSubCategory[0];
    } catch (err) {
      throw err;
    }
  }
}
