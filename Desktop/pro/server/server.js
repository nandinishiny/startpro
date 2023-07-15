import app from './App.js';
import dotenv from 'dotenv';
dotenv.config({path:"./config/config.env"})

const port = process.env.PORT||6000;
const server = app.listen(port,()=>console.log(`the server is running at ${port}`));
