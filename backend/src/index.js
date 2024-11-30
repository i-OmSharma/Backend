// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";



dotenv.config({
    path:'./.env'
})




connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {(
        console.log(` Server runing on : ${process.env.PORT}`)
    )})
})
.catch((err) => {
    console.log("DB connection fail", err);
})
























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