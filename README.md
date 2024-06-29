Book Collection App
This is a simple web application built with Node.js, Express, and MongoDB to manage a collection of books.

Features:
View a list of books
Add new books
Edit existing books
Delete books

Technologies Used:
Node.js
Express.js
MongoDB (mongoose ODM)
EJS (Embedded JavaScript) for templating
HTML5/CSS3

Installation:

To run this application locally, you need to have Node.js and MongoDB installed on your machine.

Clone this repository:

git clone <repository-url>
cd book_app


Folder Structure


book_app/
│
├── models/
│   └── Book.js
│
├── routes/
│   ├── index.js
│   └── books.js
│
├── public/
│   └── styles/
│       └── style.css
│
├── views/
│   ├── book-list.ejs
│   └── index.ejs
│
├── package.json
│
├── .env
│
└── app.js

models/: Contains Mongoose schema definitions (Book.js).
routes/: Defines Express routes (index.js for home route, books.js for book-related routes).
public/: Static assets folder (e.g., CSS files).
views/: EJS templates (index.ejs for home page, book-list.ejs for displaying books).
app.js: Main entry point of the application.
.env: Environment variables file (not included in the repository).
