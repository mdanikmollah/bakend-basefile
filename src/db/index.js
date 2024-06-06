import mongoose from 'mongoose';

const dbConnect = async()=>{
    try{
        const { connections }  = await mongoose.connect(process.env.MONGODB_CONNECTION_URI)
            console.log("mongodb connected",connections[0].name);
        
    } catch (error){
        throw new Error(error.message)
    }
}

export { dbConnect };