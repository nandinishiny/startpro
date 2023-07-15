import express from "express";
// import productRouter from './routes/productRoute.js';
// import { mongoConnect } from "./config/database.js";
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config({path:"server/config/config.env"})
// mongoConnect().then(console.log(`connected successfully in app`)).catch((e)=>console.log(`the error occusrs ${e}`))


const app = express();
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// app.use("/api/v1",productRouter);

export default app;