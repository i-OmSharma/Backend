// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path:'./.env'
})




connectDB()
























/*
import e from "express";
const app = e()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${vtube}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${precess.env.PORT}`);
            
        } )

    } catch (error) {
        console.log("ERROR: ", error)
        throw error
        
    }
})()

*/