# NexCamp-2024 - Backend Workshop

## Session 01

### Workshop Objectives
By the end of this workshop, participants will:
- Understand the fundamental concepts of backend development.
- Set up a local development environment and start a Node.js server.
- Learn to build a RESTful API using Express.js.
- Be able to handle common HTTP status codes.
- Gain experience with API testing tools like Postman and Thunder Client.

### Topics Covered:
1. **Introduction to Web Development**
2. **Backend Development Essentials**
3. **APIs and HTTP Methods**
4. **Setting Up Node.js and Express.js**
5. **Creating and Testing a Basic REST API**
6. **HTTP Status Codes and Error Handling**
7. **Working with Data Formats (JSON)**


## 1. Introduction to Web Development

### Web Statistics and Importance
- **Web Statistics**: There are over 2 billion websites in existence, but only around 400 million of them are actively maintained. This shows the huge demand for web development and ongoing maintenance of online systems.
  
- **Why Learn Web Development?**: In today’s digital world, web development skills are essential. By learning both frontend and backend technologies .

### Frontend vs. Backend Development
- **Frontend**:  referring to everything users interact with directly in their browser. It includes elements like layouts, fonts, colors, buttons (client side).

- **Backend**: The part of the application that handles data storage, application logic, and communication between the frontend and database (server side).

### Core Web Technologies
- **Frontend Technologies**:
  - **HTML**: Structures the content on the web page.
  - **CSS**: Styles the web page content (colors, layout, fonts).
  - **JavaScript**: Adds interactivity and dynamic functionality to web pages.

- **Backend Technologies**:
  - PHP
  - javascript
  - Python
  - go 
  - Rust

###  JavaScript
JavaScript was originally created to run in the browser, allowing web developers to create interactive, dynamic user interfaces. 


### how Backend and Frontend communicate  

![image](./Images/01.jpg)
![image](./Images/02.jpg)
## 2. Understanding APIs (Application Programming Interfaces)

### What is an API?
- **Definition**: An API is a set of **rules** and **protocols** that allows different software applications to communicate with each other.



### Types of APIs: RESTful APIs
- **RESTful API**: This is a architecture for designing networked applications.  It uses standard HTTP methods to perform CRUD operations on resources.
  - **GET**: Retrieves data.
  - **POST**: Submits data for creation.
  - **PUT**: Updates data.
  - **DELETE**: Removes data.
### Request and Response Structure
  - **Request**:
![images](./Images/03.jpg)
  - **Response**:
![images](./Images/04.jpg)
  - **Request**:
    ```http
    GET http://company.com/api/v2/users HTTP1.1
    ```
    This fetches a list of users.
another example

  - **Response**:
    ```http
    HTTP/1.1 200 OK
    Content-Type: application/json
    [
      {
        "name": "Ahmed",
        "age": 10,
        "city": "Tiziouzou"
      },
      {
        "name": "Achraf",
        "age": 20,
        "city": "Khenchela"
      },
      {
        "name": "Bodja",
        "age": 30,
        "city": "setif"
      }
    ]
    ```
    The server responds with a `200 OK` status and the data in JSON format.
    ### Tools for Working with APIs
To interact with APIs, developers commonly use tools that help in making requests, viewing responses, and debugging:
- **Postman**: A popular tool for testing APIs, allowing users to send HTTP requests and view responses in a user-friendly interface.
- **cURL**: A command-line tool for making HTTP requests, often used in terminal-based workflows.
- **Thunder Client**: A lightweight API testing extension for Visual Studio Code, providing an easy-to-use interface for making requests, viewing responses, and organizing API collections without leaving the code editor.

**Task 1**:

 Use the provided URL to make a `GET` request. This request should retrieve data from the specified endpoint. Try using tools like Postman or writing code to complete this task.
[endpoints](http://api.aladhan.com/v1/hijriCalendarByCity/1446/2?country=dz&city=khenchela)

## 3. Setting Up the Development Environment

### Backend Components
- **Server**: A server listens for incoming requests from clients or frontend.
  
- **Database**: A database is used to store and manage data. Popular databases include MySQL, MongoDB, and PostgreSQL. These databases interact with the backend server to retrieve, modify, and store data.

### Setting Up Node.js
- **Node.js**: Node.js is a JavaScript runtime that enables JavaScript to run on the server-side (outside the browser). Originally, JavaScript could only run in a browser, but Node.js makes it possible to use it on your machine.

For a brief overview of JavaScript, click here: [Link text Here](https://github.com/achrafness/NexCamp-2024/blob/main/00-basics-js/basics.md)

**Task 2**:
1. Declare two variables, `a` and `b`, with values 10 and 20, respectively.
2. Declare a constant variable `name`.
3. Use `console.log()` to:
   - Output the values of `a` and `b`.
   - Print "Hello World!".
   - Print the sum: `result of a + b = 30`.

**Task 2 Solution**
```js
// Declare variables
let a = 10;
let b = 20;
const name = "Your Name";

// Output the values of `a` and `b`
console.log("Value of a:", a);
console.log("Value of b:", b);

// Print "Hello World!"
console.log("Hello World!");

// Print the sum of `a` and `b`
console.log(`Result of a + b = ${a + b}`);
```
## 4. Building a Basic Backend with Express.js

### Introduction to Express.js
- **Express.js**: Express is framework that simplifies backend development. It provides tools to handle HTTP requests, routing, and middleware functions, making it easier to build scalable and maintainable web applications.



### Understanding package.json
- **Purpose of `package.json`**: The `package.json` file holds metadata about your project, including its dependencies (libraries and frameworks), scripts, and project settings.
  
  - To create `package.json`, use:
    ```bash
    npm init
    ```
    This initializes a new Node.js project.
  - To install Express, use:
    ```bash
    npm install express
    ```

### Creating a Basic Express App

1. **Initialize the Project**:
   - In your project directory, run:
     ```bash
     npm init -y
     ```
     This will create a `package.json` file.

2. **Install Express**:
   - Install Express with:
     ```bash
     npm install express
     ```

3. **Create a Basic Server**:
   - In the root directory, create a file named `server.js` (or `app.js`).
   - Add the following code to set up the basic server:

     ```javascript
     const express = require('express');
     const app = express();
     const PORT = 3000;

     // Basic route for the root URL (localhost:3000)
     app.get('/', (req, res) => {
       res.send('Hello World!');
     });


     // Start the server and listen on the specified port
     app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
     });
     ```
    - why we use spcfic port 
    - and why we use listen 
4. **Run the Server**:
   - In your terminal, start the server by running:
     ```bash
     node server.js
     ```
   - You should see the message: `Server is running on http://localhost:3000`.

5. **Test the Server**:
   - Open a browser or use a tool like cURL, Postman, or Thunder Client to make requests to:
     - `http://localhost:3000/` to see "Hello World!"

This basic server is set up to handle GET requests and respond with simple text.

**Task 3**:
1. Create a simple Express app.
2. Define two GET routes:
   - `/`: Respond with "Hello World!"
   - `/api`: Respond with "Hello from another world!"
3. Make the app listen on port `3000` and log a success message when the server starts.

**Task 3 Solution**:
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.send('Hello from another world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```


## 5. Understanding HTTP Status Codes

### What are HTTP Status Codes?
- **Purpose**: HTTP status codes are three-digit numbers sent by the server to indicate the result of the request. They help clients understand if their request was successful, failed, or if further action is required.

### Status Code Categories:
- **1xx**: Informational responses (e.g., `100 Continue`)
- **2xx**: Success (e.g., `200 OK`, `201 Created`)
- **3xx**: Redirection (e.g., `301 Moved Permanently`)
- **4xx**: Client errors (e.g., `400 Bad Request`, `404 Not Found`)
- **5xx**: Server errors (e.g., `500 Internal Server Error`)

**Key Status Codes**:
- `200 OK`: The request was successful.
- `201 Created`: A new resource was created successfully.
- `400 Bad Request`: The request was malformed or invalid.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: There was a server error while processing the request.

**Task 4**:
- Configure routes to return different HTTP status codes:
  - `GET /`: return `200 OK` with "Hello World"
  - `POST /`: return `201 Created`
  - `GET /bad`: return `400 Bad Request`
  - `GET /not-found`: return `404 Not Found`
  - `GET /error`: return `500 Internal Server Error`

**Task 4 Solution**:
```js
// read
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})
// create
app.post("/", (req, res) => {
    res.status(201).send("Hello World");
})
// Bad Request
app.get("/bad", (req, res) => {
    res.status(400).send("Bad Request");
})
// Not Found
app.get("/not-found", (req, res) => {
    res.status(404).send("Not Found");
})
// Internal Server Error
app.get("/error", (req, res) => {
    res.status(500).send("Internal Server Error");
})
```
## 6. Data Formats in Web Development

### Importance of Data Formats
- **Purpose**: Data formats like JSON and XML are used to structure data in a way that can be easily transmitted over the internet and processed by both clients and servers.

- **Popular Formats**:
  - **JSON**: JavaScript Object Notation. A lightweight, human-readable format for transmitting data.
  - **XML**: eXtensible Markup Language. A markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable.

- Example JSON:
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
  }
  ```
- Example XML:
  ```xml
  <person>
    <name>John Doe</name>
    <age>30</age>
    <city>New York</city>
  </person>
  ```

**Task 5**:
- Add the /cars Route  define a new GET route for /cars that responds with JSON data.


**Task 5 solution**:
```js
let cars = [
  { id: 1, make: "Toyota", model: "Corolla", year: 2020 },
  { id: 2, make: "Honda", model: "Civic", year: 2021 },
];

// READ: Get all cars
app.get("/cars", (req, res) => {
  res.status(200).json(cars);
});
```

<!-- - **Role of Backend Developers**: Backend developers are responsible for server-side logic, handling requests, data processing, and ensuring the application runs smoothly behind the scenes. -->