// part 2 : Queries find all books in a specific genre
// Find all Fantasy books
db.books.find({ genre: "Fantasy" })

// Find all Fiction books  
db.books.find({ genre: "Fiction" })

// Find all Science Fiction books
db.books.find({ genre: "Science Fiction" })

// Find all Romance books
db.books.find({ genre: "Romance" })

// Find all Dystopian books
db.books.find({ genre: "Dystopian" })

// with sorting
// Find Fantasy books sorted by title (A-Z)
db.books.find({ genre: "Fantasy" }).sort({ title: 1 }).pretty()

// Find Fiction books sorted by published year (newest first)
db.books.find({ genre: "Fiction" }).sort({ published_year: -1 }).pretty()

// Find Science Fiction sorted by price (low to high)
db.books.find({ genre: "Science Fiction" }).sort({ price: 1 }).pretty()

// Find Fantasy sorted by author then title
db.books.find({ genre: "Fantasy" }).sort({ author: 1, title: 1 }).pretty()

// Find Fantasy books - show only title, author, and price
db.books.find(
  { genre: "Fantasy" },
  { title: 1, author: 1, price: 1, _id: 0 }
).pretty()

// Find Fiction books - show title, author, and published year
db.books.find(
  { genre: "Fiction" },
  { title: 1, author: 1, published_year: 1, _id: 0 }
).pretty()

// Find Science Fiction - exclude the _id field
db.books.find(
  { genre: "Science Fiction" },
  { _id: 0, title: 1, author: 1, published_year: 1, price: 1 }
).pretty()

// Find Fantasy books with formatted output
db.books.find({ genre: "Fantasy" }).pretty()

// Find Fiction books with formatted output
db.books.find({ genre: "Fiction" }).pretty()

// Find Adventure books with formatted output
db.books.find({ genre: "Adventure" }).pretty()

// PART B
 // find books published after a acertain years

 // Find books published after 2000
db.books.find({ published_year: { $gt: 2000 } })

// Find books published after 1950
db.books.find({ published_year: { $gt: 1950 } })

// Find books published after 1980
db.books.find({ published_year: { $gt: 1980 } })

// PART C FIND BOOKS BY A SPECIFIC AUTHOR
// Find all books by J.R.R. Tolkien
db.books.find({ author: "J.R.R. Tolkien" })

// Find all books by Harper Lee
db.books.find({ author: "Harper Lee" })

// Find all books by George Orwell
db.books.find({ author: "George Orwell" })

// Find all books by Jane Austen
db.books.find({ author: "Jane Austen" })

// Find all books by J.K. Rowling
db.books.find({ author: "J.K. Rowling" })

// PART D UPDATE THE PRICE OF A SPECIFIC BOOK

// Update the price of "The Hobbit"
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 15.99 } }
)

// Update the price of "1984"
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.50 } }
)

// Update the price of "Harry Potter and the Sorcerer's Stone"
db.books.updateOne(
  { title: "Harry Potter and the Sorcerer's Stone" },
  { $set: { price: 18.99 } }
)

// PART E DELETE A BOOK BY ITS TITLE
// Delete "The Hobbit" by title
db.books.deleteOne({ title: "The Hobbit" })

// Delete "1984" by title
db.books.deleteOne({ title: "1984" })

// Delete "To Kill a Mockingbird" by title
db.books.deleteOne({ title: "To Kill a Mockingbird" })


// 3 ADVANCED QUERIES 1;Write a query to find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

// 2.Use projection to return only the title, author, and price fields in your queries
// Find all books - show only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Find Fantasy books - only title, author, price
db.books.find(
  { genre: "Fantasy" },
  { title: 1, author: 1, price: 1, _id: 0 }
)

// Find books by specific author - only title and price
db.books.find(
  { author: "J.R.R. Tolkien" },
  { title: 1, price: 1, _id: 0 }
)

//3.mplement sorting to display books by price (both ascending and descending)
// All books sorted by price (lowest first) ASCENDING ORDER
db.books.find().sort({ price: 1 }).pretty()

// All books with projection, sorted by price (lowest first)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 }).pretty()

// // All books sorted by price (highest first)  DESCENDING ORDER
db.books.find().sort({ price: -1 }).pretty()

// All books with projection, sorted by price (highest first)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: -1 }).pretty()

// USE LIMIT AND SKIP METHODS TO IMPLEMENT PAGINATION (5 BOOKS PER PAGE)
// Page 1: Books 1-5
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).limit(5).skip(0).pretty()

// Page 2: Books 6-10
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).limit(5).skip(5).pretty()

// Page 3: Books 11-15
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).limit(5).skip(10).pretty()

// TASK 4 AGGREGATION PIPELINE: Create an aggregation pipeline to calculate the average price of books by genre
// Basic average price by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
])

// 2 Create an aggregation pipeline to find the author with the most books in the collection
// Find author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
])

// 3; Implement a pipeline that groups books by publication decade and counts them
// Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      },
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

// TASK 5 INDEXING  ; Create an index on the title field for faster searches
db.books.createIndex({ title: 1 })
// 2. Create a compound index on author and published_year
// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// 3 Use the explain() method to demonstrate the performance improvement with your indexes
// Basic explain without execution stats
db.books.find({ title: "The Hobbit" }).explain()

// With execution stats for detailed performance data
db.books.find({ title: "The Hobbit" }).explain("executionStats")


