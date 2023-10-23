const express = require('express');
const app = express();
const port = 3001;

const books = [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "1984" },
];

app.get('/books/long', (req, res) => {
    res.send("List of long books");
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);
    if (!book) {
        return res.status(404).send("Book not found");
    }
    res.send(`Book Title: ${book.title}`);
});

app.get('/error-example/:id', (req, res) => {
    res.send(`Book ID: ${req.params.id}`);

    res.send('This is an error example');
});

app.get('/fixed-example/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);
    if (!book) {
        return res.status(404).send("Book not found");
    }
    res.send(`Book Title: ${book.title}`);
});

app.get('/greet/:firstname/:lastname', (req, res) => { res.send(`Hello ${req.params.firstname} ${req.params.lastname}`); });


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});