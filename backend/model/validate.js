import mongoose from "mongoose";


const validateSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    },

    done:{
        type:Boolean,
        default:false
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})


const todo=mongoose.model('todo',validateSchema);

export default todo;