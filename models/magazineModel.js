import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId

const magazineSchema = new mongoose.Schema({
    title:{
        type:String
    },
    isbn:{
        type:String
    },
    authors:{
        type:String,
        
    },
    publishedAt:{
        type:String
    },
    authorId: {
        type: ObjectId,
        ref: 'author', 
    }

}, { timestamps: true })

export default mongoose.model('magazine', magazineSchema)