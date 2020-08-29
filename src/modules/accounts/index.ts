import express from "express"

export default (r: express.Router) => {
  r.get(("/accounts"), (req,res) => {
    res.json("hi from accounts")
  })
}
