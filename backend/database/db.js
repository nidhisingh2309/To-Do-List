import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


const DBConnection=async()=>{

    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-li3sbja-shard-00-00.kqlocm4.mongodb.net:27017,ac-li3sbja-shard-00-01.kqlocm4.mongodb.net:27017,ac-li3sbja-shard-00-02.kqlocm4.mongodb.net:27017/?ssl=true&replicaSet=atlas-aomurn-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('Database connected successfully');
    }

    catch(error){
        console.error('Error while connecting with the database');
    }
}

export default DBConnection;