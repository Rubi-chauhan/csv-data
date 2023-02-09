import csv from 'csvtojson'
import mongoose from 'mongoose';
import magazine from '../models/magazineModel.js';
import book from '../models/bookModel.js';
import combinedCollection from '../models/combinedModel.js';
import fs from 'fs'
import json2csv from 'json2csv'
json2csv.parse



const importMagazine = async (req, res) => {
  try {
    csv({delimiter: ';'})
    .fromFile('./csvFiles/Magazines.csv')
    .then(async(data)=>{
      console.log(data)
      await magazine.insertMany(data)
    })

        return res.status(201).send({ status: true, message: 'magazine csv data imported successfully' });
     
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};


 //TODO Print out all books and magazines with all their details

const getAllMagazines = async(req,res)=>{
    try {
        const allMagazines = await magazine.find()
        return res.status(200).send({ status: true, message: 'All magazines data fetched successfully' ,allMagazines});
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
    };

  //TODO  Find a book or magazine by its ISBN.

  const getByIsbn = async(req,res)=>{
    try {
        const isbn = req.query.isbn
        const result = await magazine.findOne({isbn:isbn})
        return res.status(200).send({ status: true, message: 'magazine data fetched successfully' ,result});
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
    };

    const magazineByEmail = async(req,res)=>{
        try {
            const email = req.params.email
            const result = await magazine.find({authors:email})
            return res.status(200).send({ status: true, message: 'Magazine data by email fetched successfully' ,result});
        } catch (error) {
            return res.status(500).send({ status: false, message: error.message });
        }
        };

        const sortByTitle = async(req,res)=>{
            try {
                // await book.find({},  function(err, bookData) {
                //      magazine.find({}, async function(err, magazineData) {
                //       // Combine the data
                //       let combinedData = bookData.concat(magazineData);

                //       await combinedCollection.insertMany(combinedData)

                //     });
                //   });
                 const result =  await combinedCollection.find().sort({title:1})
                 return res.status(200).send({ status: true, message: 'sorted data' ,result});
            }catch (error) {
                return res.status(500).send({ status: false, message: error.message });
            }
            };


 //TODO add a new magazine
            const createNewMagazine = async(req,res)=>{
                try {
                    const data = req.body
                    const newMagazine = await magazine.create(data);
                    return res.status(201).send({ status: true, message: 'New magazine data created successfully' ,newMagazine});
                    
                } catch (error) {
                    return res.status(500).send({ status: false, message: error.message });
                }
            }

           const download = async(req,res) =>{
            try {
                const data = await magazine.find()
                const csv = json2csv(data);

                fs.writeFileSync('./download/magazineData.csv', csv, 'utf-8');
          
                return res.download('./download/magazineData.csv', function(err) {
                  if (err) {
                    console.error(err);
                  } else {
                    console.log('CSV file downloaded successfully!');
                  }
                });
            } catch (error) {
                return res.status(500).send({ status: false, message: error.message });
            }
           }
export { importMagazine, getAllMagazines ,getByIsbn, magazineByEmail, sortByTitle , createNewMagazine,download };