import express from 'express'

const router = express()

import {importAuthor} from '../controllers/authorController.js'
import { importBook ,getAllBooks, bookByIsbn, bookByEmail, createNewBook} from '../controllers/bookController.js';
import { importMagazine ,getAllMagazines,getByIsbn, magazineByEmail, sortByTitle, createNewMagazine, download} from '../controllers/magazineController.js';


router.post('/csv/author', importAuthor)
router.post('/csv/book', importBook)
router.post('/csv/magazine', importMagazine)

router.get('/all-books',getAllBooks)
router.get('/bookByIsbn', bookByIsbn)
router.get('/books/:email', bookByEmail)
router.post('/new-book', createNewBook)

router.get('/all-magazines',getAllMagazines)
router.get('/byIsbn', getByIsbn)
router.get('/magazines/:email', magazineByEmail)
router.get('/sortByTitle', sortByTitle)
router.post('/new-magazine', createNewMagazine)
router.get('/download', download)


export default router;