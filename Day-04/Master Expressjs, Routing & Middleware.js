  // 1) Introduction to Express.js:-
// Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
// It simplifies the process of creating server-side applications by providing a set of tools and middleware to handle HTTP requests, routing, and more.
// Express.js is built on top of Node.js and is designed to be lightweight and unopinionated, allowing developers to structure their applications as they see fit.
// It is widely used for building RESTful APIs, single-page applications, and traditional web applications.
// Express.js is known for its simplicity, performance, and extensive ecosystem of middleware and plugins that can be easily integrated into applications.

// 2) Setting up a basic Express application:-

// To set up a basic Express application, you need to follow these steps:
// 1. Install Express.js using NPM:
//    ```bash
//    npm install express
//    ```
// 2. Create a new JavaScript file (e.g., `app.js`) and require the Express module:
//    ```javascript
//    const express = require('express');
//    const app = express();
//    ```
// 3. Define a simple route to handle HTTP GET requests:  
//    ```javascript
//    app.get('/', (req, res) => {
//      res.send('Hello, World!');    
//    });
//    ```
// 4. Start the server by listening on a specific port:
//    ```javascript
//    const PORT = process.env.PORT || 3000;
//    app.listen(PORT, () => {
//      console.log(`Server is running on port ${PORT}`);
//    });

// 3) Routing:-

// Routing in Express.js allows you to define how your application responds to different HTTP requests.
// You can create routes for different HTTP methods (GET, POST, PUT, DELETE) and specify the URL path for each route.


// 4) Middleware:-

// Middleware in Express.js is a function that has access to the request and response objects, as well as the next middleware function in the application’s request-response cycle.
// Middleware functions can perform various tasks, such as modifying the request or response objects, logging requests, handling errors, and more.
// Middleware can be added globally or to specific routes, and they are executed in the order they are defined.
// To use middleware, you can define a function and use `app.use()` to apply it to all routes or `app.METHOD()` for specific routes.
