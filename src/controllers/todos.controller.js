import { Todos } from "../models/todos.model.js";

export const create = async (req,res) =>{
    const { title, description, completed, user } = req.body
    if ([title, description].some((field)=> field === "")){
        res.json({ error: "sob lagbe", statusCode: 400})
    }
    if (user) {
        const todo = await Todos.create({title, description, completed, user})
        res.json({ message: "todo added", data:todo  })
        
    }
}

export const getTodos = async (_,res) => {
const todos = await Todos.find()
res.json({ message: "todo added", data:todos  })
}