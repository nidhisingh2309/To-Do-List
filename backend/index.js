import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


import Routes from './routes/routes.js'
import DBConnection from "./database/db.js";



const app=express();
app.use(cors());


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Routes);

const PORT=8000;

DBConnection();
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));