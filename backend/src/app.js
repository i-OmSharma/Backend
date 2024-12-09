import e from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = e();

app.use(cors({
    origin: process.env.CORS_ORI, 
    credentials: true
}))

app.use(e.json({limit: "16kb"}))
app.use(e.urlencoded({extended: true, limit: "16kb"}))
app.use(e.static("public"))
app.use(cookieParser())

//routes

import userRouter from "./routes/user.routes.js"

//router declaration

// aap.use("/user", userRouter)
//std practice: api versoning

app.use("/api/v1/user", userRouter)

export { app } 