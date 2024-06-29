// routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Route to get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.render('book-list', { books });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Route to add a new book
router.post('/', async (req, res) => {
    try {
        const { title, author, description, pageCount, publishDate } = req.body;
        const newBook = new Book({
            title,
            author,
            description,
            pageCount,
            publishDate: publishDate || Date.now()
        });
        await newBook.save();
        res.status(201).redirect('/books');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Route to update a book
router.patch('/:id', async (req, res) => {
    try {
        const { title, author, description, pageCount, publishDate } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, {
            title,
            author,
            description,
            pageCount,
            publishDate
        }, { new: true });
        if (!updatedBook) {
            return res.status(404).send('Book not found');
        }
        res.redirect('/books');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Route to delete a book
router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).send('Book not found');
        }
        res.redirect('/books');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
