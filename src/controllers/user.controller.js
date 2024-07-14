import { User } from "../models/users.model.js"
import bcrypt from "bcrypt";

const register = async (req, res) => {
const { name,email,password } = req.body
if([name,email,password].some((field) => field?.trim() == "")){
    res.json({error:"sob lagbe", statusCode:400})
}
const hashPassword = await bcrypt.hash(password,10)
const user = await User.create({ name:name, email:email, password:hashPassword })
const user2 = await User.findById(user._id).select("-password")
res.json({ message: "register done", data:user2  })
}

const login = async (req, res) => {
    const { email,password } = req.body
    if([email,password].some((field) => field?.trim() == "")){
        res.json({error:"sob lagbe"})
    }
    const user = await User.findOne({ email })
    console.log(user);

    if(!user){
        res.send("invalid email")
        return
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if(!isPasswordCorrect){
        res.send("invalid password")
        return
    }
    
    const user2 = await User.findById(user._id).select("password")
    res.json({ message: "login done", data:user2, statusCode: 200 })     
}

export { login, register }