import csv from 'csvtojson'

import book from '../models/bookModel.js';

const importBook = async (req, res) => {
  try {
    csv({delimiter: ';'})
    .fromFile('./csvFiles/Books.csv')
    .then(async(data)=>{
      
      await book.insertMany(data)
    })
  

        return res.status(201).send({ status: true, message: 'book csv data imported successfully' });
     
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};


//TODO Print out all books and magazines with all their details

const getAllBooks = async(req,res)=>{
try {
    const allBooks = await book.find()
    return res.status(200).send({ status: true, message: 'All books data fetched successfully' ,allBooks});
} catch (error) {
    return res.status(500).send({ status: false, message: error.message });
}
};

const bookByIsbn = async(req,res)=>{
    try {
        const isbn = req.query.isbn
        const result = await book.findOne({isbn:isbn})
        return res.status(200).send({ status: true, message: 'book data by isbn fetched successfully' ,result});
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
    };


    //TODO Find all books and magazines by their authors’ email.
    const bookByEmail = async(req,res)=>{
        try {
            const email = req.params.email
            const result = await book.find({authors:email})
            return res.status(200).send({ status: true, message: 'book data by email fetched successfully' ,result});
        } catch (error) {
            return res.status(500).send({ status: false, message: error.message });
        }
        };
    

        //TODO add a new book
        const createNewBook = async(req,res)=>{
            try {
                const data = req.body
                const newBook = await book.create(data);
                return res.status(201).send({ status: true, message: 'New magazine data created successfully' ,newBook});
                
            } catch (error) {
                return res.status(500).send({ status: false, message: error.message });
            }
        }


export { importBook ,getAllBooks, bookByIsbn, bookByEmail, createNewBook};