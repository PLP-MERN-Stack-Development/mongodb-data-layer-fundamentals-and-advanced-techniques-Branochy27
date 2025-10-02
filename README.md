![WhatsApp Image 2025-10-03 at 01 46 56_1630c2d6](https://github.com/user-attachments/assets/bbdbc6b1-d26e-4390-bb0c-a95426d1e718)











MongoDB Book Collection Management System
A comprehensive MongoDB database system for managing a book collection 
CRUD operations 
 optimized queries
 indexes
 aggregation pipelines.

📚 Collection Schema
Each book document contains the following fields:

title (string): The title of the book

author (string): The author's name

genre (string): The book's genre/category

published_year (number): Publication year

price (number): Book price in USD

in_stock (boolean): Availability status

pages (number): Number of pages

publisher (string): Publishing company

🚀 Quick Start
1. Database Setup
javascript
// Switch to your database
use bookstore

// Insert sample data📲
load('insert_books.js')
2. Sample Data Insertion
The insert_books.js script inserts 12 sample books with diverse genres, authors, and publication years.

📊 Core Queries
Find Books by Genre
javascript
// Find all Fantasy books
db.books.find({ genre: "Fantasy" }).pretty()

//📖 Find Fiction books with projection👀
db.books.find(
  { genre: "Fiction" },
  { title: 1, author: 1, price: 1, _id: 0 }
).pretty()
Find Books Published After Year
javascript
// Books published after 2000👶
db.books.find({ published_year: { $gt: 2000 } }).pretty()

// Recent books with specific fields📚
db.books.find(
  { published_year: { $gt: 2010 } },
  { title: 1, author: 1, published_year: 1, _id: 0 }

).pretty()
