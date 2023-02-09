import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId

const combinedSchema = new mongoose.Schema({
    title:{
        type:String
    },
    isbn:{
        type:String
    },
    authors:{
        type:String,
    },
    description:{
        type:String
    },
    publishedAt:{
        type:String
    }

}, { timestamps: true })

export default mongoose.model('combined', combinedSchema)