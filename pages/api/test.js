import { createExpense } from '../../lib/redis'

export default async function handler(req, res) {
    let expense = {
        description: "teste",
        value: "teste",
        date: "teste",
    }
    let id = await createExpense(expense)
    res.status(200).json({ id })
  }
  