
import { app } from "./app.js";
import { dbConnect } from "./db/index.js";

dbConnect()

app.listen("8000",()=>{
    console.log("server is running");
})