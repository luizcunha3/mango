import { createNewExpense } from '../../lib/model/Expense'
import { createExpense } from '../../lib/redis'

export default async function handler(req, res) {
    let expense = createNewExpense("teste2", "teste2", "teste2")
    let id = await createExpense(expense)
    res.status(200).json({ id })
  }
  