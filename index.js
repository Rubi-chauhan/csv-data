import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import dotenv from 'dotenv'
dotenv.config()
import routes from './routes/route.js'


const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(multer().any());

const PORT = process.env.PORT || 4000

const user= process.env.USER
const password= process.env.PASSWORD
const cluster = process.env.CLUSTER
const db_name = process.env.DB_NAME

mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://${user}:${password}@${cluster}.mongodb.net/${db_name}`,  {useNewUrlParser: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use('/',routes)


app.listen(PORT, ()=>{
    console.log(`server is working`);
})
