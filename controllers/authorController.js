import fs from 'fs';
// import csv from 'csv-parser';
import csv from 'csvtojson'
import author from '../models/authorModel.js';

const importAuthor = async (req, res) => {
  try {
    csv({delimiter: ';'})
    .fromFile('./csvFiles/Authors.csv')
    .then(async(data)=>{
      
      await author.insertMany(data)
    })
  

        return res.status(201).send({ status: true, message: 'csv data imported successfully' });
     
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

export {importAuthor};