import { Router } from "express";
import { create, getTodos } from "../controllers/todos.controller.js";



const router = Router()
router.route("/create").post(create)
router.route("/getTodos").get(getTodos)



export default router