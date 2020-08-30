import knex from "knex";
import Account from "./account";

export default class AccountRepo {
  constructor(private db: knex) {}

  async findByBudgetId(id: string) {
    try {
      const accounts = await this.db
        .select("*")
        .where("budgetId", id)
        .from("account");
      return accounts;
    } catch (err) {
      throw err;
    }
  }

  async insert(budgetId: string, account: Partial<Account>) {
    try {
      const newAccount = await this.db
        .insert(
          {
            budgetId,
            name: account.name,
            linked: account.linked,
            balance: account.balance
          },
          "*"
        )
        .into("account");

      return newAccount[0];
    } catch (err) {
      throw err;
    }
  }

  async update(id: string, account: Partial<Account>) {
    try {
      const updated = await this.db
        .update({ name: account.name, balance: account.balance }, "*")
        .where("id", id)
        .from("account");

      return updated;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: string) {
    try {
      await this.db
        .delete()
        .where("id", id)
        .from("account");
    } catch (err) {
      throw err;
    }
  }
}
