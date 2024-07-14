import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"
import todoRoute from "./routes/todo.route.js"

const app = express()

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ limit: "16kb", extended: true }))

app.use(cors({
    origin : "*"
}))
app.use(cookieParser())

app.use(`${process.env.API_LINK}/users`,userRoute)
app.use(`${process.env.API_LINK}/todos`,todoRoute)


export { app }