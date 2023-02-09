import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
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
    authorId: {
        type: ObjectId,
        ref: 'author', 
    }

}, { timestamps: true })

export default mongoose.model('book', bookSchema)

