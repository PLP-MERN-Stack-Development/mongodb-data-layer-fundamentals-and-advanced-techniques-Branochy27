// updated insert_books.js
//import mongodb 
import { MongoClient } from 'mongodb';
// coonection uri
const uri = 'mongodb://localhost:27017';
// database and collection name 
const dbName = 'plp_bookstore';
const collectionName = 'books';
// sample data updated
const books = db.books.insertMany([
  {
    title: "The Great Adventure",
    author: "John Smith",
    genre: "Adventure",
    published_year: 2015,
    price: 19.99,
    in_stock: true,
    pages: 320,
    publisher: "Adventure Press"
  },
  {
    title: "Mystery of the Night",
    author: "Jane Doe",
    genre: "Mystery",
    published_year: 2018,
    price: 14.99,
    in_stock: true,
    pages: 250,
    publisher: "Mystery House"
  },
  {
    title: "Science Basics",
    author: "Albert Newton",
    genre: "Science",
    published_year: 2020,
    price: 29.99,
    in_stock: false,
    pages: 400,
    publisher: "EduBooks"
  },
  {
    title: "Romantic Tales",
    author: "Emily Bronte",
    genre: "Romance",
    published_year: 2012,
    price: 9.99,
    in_stock: true,
    pages: 210,
    publisher: "Love Stories Ltd"
  },
  {
    title: "History of Time",
    author: "Stephen Hawkings",
    genre: "History",
    published_year: 2016,
    price: 24.50,
    in_stock: true,
    pages: 380,
    publisher: "Time Publishers"
  },
  {
    title: "Cooking 101",
    author: "Gordon Ramsay",
    genre: "Cooking",
    published_year: 2019,
    price: 18.75,
    in_stock: false,
    pages: 150,
    publisher: "Culinary Arts"
  },
  {
    title: "Fantasy World",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 2021,
    price: 22.00,
    in_stock: true,
    pages: 450,
    publisher: "Magic Press"
  },
  {
    title: "Tech Innovations",
    author: "Elon Musk",
    genre: "Technology",
    published_year: 2023,
    price: 34.95,
    in_stock: true,
    pages: 300,
    publisher: "Future Tech"
  },
  {
    title: "Gardening Guide",
    author: "Mary Green",
    genre: "Hobby",
    published_year: 2017,
    price: 15.00,
    in_stock: false,
    pages: 180,
    publisher: "Nature Books"
  },
  {
    title: "Philosophy 101",
    author: "Socrates",
    genre: "Philosophy",
    published_year: 2005,
    price: 12.50,
    in_stock: true,
    pages: 280,
    publisher: "Ancient Wisdom"
  }
]);
