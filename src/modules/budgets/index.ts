import express from "express";

export default (r: express.Router) => {
  r.get("/budgets", (req: express.Request, res: express.Response) => {
    return res.json('hello')
  });
};
