import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: true, 
        required: true
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    }

}, { timestamps: true })

export default mongoose.model('author', authorSchema)