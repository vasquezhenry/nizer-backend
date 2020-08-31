import knex from "knex";
import Transaction from "./transaction";

export default class TransactionRepo {
  constructor(private db: knex) {}

  async insert(transaction: Transaction) {
    try {
      const added = await this.db.insert(transaction, "*").into("transaction");
      return added;
    } catch (err) {
      throw err;
    }
  }

  async remove(transactionId: string) {
    try {
      const removed = await this.db
        .delete()
        .from("transaction")
        .where("id", transactionId);
      return removed;
    } catch (err) {
      throw err;
    }
  }

  async update(transactionId: string, transaction: Transaction) {
    try {
      const updated = await this.db
        .update(
          {
            inflow: transaction.inflow,
            date: transaction.date,
            outflow: transaction.outflow,
            description: transaction.description,
            cleared: transaction.cleared
          },
          "*"
        )
        .from("transaction")
        .where("id", transactionId);

      return updated;
    } catch (err) {
      throw err;
    }
  }

  async findBySubCategoryId(categoryId: string) {
    try {
      const transactions = await this.db
        .select("*")
        .from("transaction")
        .where("categoryId", categoryId);
      return transactions;
    } catch (err) {
      throw err;
    }
  }

  async findByAccountId(accountId: string) {
    try {
      const transactions = await this.db
        .select("*")
        .from("transaction")
        .where("accountId", accountId);
      return transactions;
    } catch (err) {
      throw err;
    }
  }
}
