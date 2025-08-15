// 1)	Data Storage :-
// MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.
// This allows for a more dynamic schema compared to traditional SQL databases.
// It is designed to handle large volumes of data and can scale horizontally across many servers.
// MongoDB uses collections to group documents, similar to tables in SQL.
// Documents in MongoDB can have varying structures, which means you can store different fields in different documents within the same collection.
// This flexibility is particularly useful for applications that require rapid development and iteration.
// MongoDB supports various data types, including strings, numbers, arrays, and nested documents.
// It also provides powerful querying capabilities, allowing developers to retrieve and manipulate data efficiently.
// 2)	Mongoose :-
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
// It provides a schema-based solution to model application data, making it easier to work with MongoDB.
// Mongoose allows developers to define schemas for their data, which can enforce structure and validation rules
// on the documents stored in MongoDB.
// This helps maintain data integrity and consistency across the application.
// Mongoose also provides a powerful query API, allowing developers to perform complex queries and operations on the database.
// It supports middleware, which can be used to add pre and post hooks for operations like saving, updating, and deleting documents.
// Mongoose simplifies the interaction with MongoDB by providing a more structured and type-safe way to work with data.
// 3)	Database Management :-
// Database management in MongoDB involves creating, reading, updating, and deleting (CRUD) operations
// on documents within collections.
// MongoDB provides a rich set of commands and methods to perform these operations efficiently.
// It supports indexing, which can significantly improve query performance by allowing faster data retrieval.
// MongoDB also supports aggregation, which allows developers to perform complex data processing and analysis operations.
// Additionally, MongoDB provides features like replication and sharding for high availability and scalability.
// Replication allows for data redundancy by maintaining copies of data across multiple servers,
// while sharding enables horizontal scaling by distributing data across multiple servers.
// MongoDB's flexible schema design and powerful querying capabilities make it suitable for a wide range of applications
// that require efficient data storage and retrieval.
// Overall, MongoDB, along with Mongoose, provides a robust framework for managing data in modern web applications.
// 4)	Example Code Snippet for Mongoose Usage:  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))   
  .catch(err => console.error('MongoDB connection error:', err));
// Define a schema for a user
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
  createdAt: { type: Date, default: Date.now }
});
// Create a model based on the schema
const User = mongoose.model('User', userSchema);
  
// Create a new user
const newUser = new User({
  name: 'John Doe',
  email: "john@gmail.com"
});
newUser.save()
  .then(user => console.log('User created:', user))
  .catch(err => console.error('Error creating user:', err));  
