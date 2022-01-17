import { Client, Entity, Repository, Schema } from "redis-om";

const client = new Client();

async function connect() {
    if(!client.isOpen()){
        await client.open(process.env.REDIS_URL)
    }
}

class Expense extends Entity {}
let expenseSchema = new Schema(
    Expense,
    {
        description: { type: 'string' },
        value: { type: 'string' },
        date: { type: 'string' },
    },
    {
        dataStructure: 'JSON'
    }
)

export async function createExpense(data) {
    await connect();
    const repository = new Repository(expenseSchema, client);
    const expense = repository.createEntity(data)
    const id = repository.save(expense)
    return id
}