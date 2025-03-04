# Express.js School Management API

A simple REST API for managing students and teachers in a school system.

## Project Overview

This project is a Node.js/Express.js application that provides API endpoints to manage students and teachers data. The data is currently stored in JSON files and provides basic CRUD operations.

## Features

- Student Management (CRUD operations)
- Teacher Management (CRUD operations)
- Course tracking for both students and teachers
- Teacher-specific information (salary and diplomas)

## Prerequisites

- Node.js (Latest version)
- npm (Node Package Manager)
- Docker (optional, for containerization)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ouhssini/express-api
   ```

2. Navigate to the project directory:

   ```bash
   cd express-api
   ```

3. Install dependencies:

    ```bash  
    npm install 
    ```

4. Create a .env file in the root directory and add:

    ```bash  
    PORT=3000 (or any port you want) 
    ```  

## Running the Application

```bash
    npm start
```

The server will start on <http://localhost:3000>

## Using Docker

1. Build the Docker image:

    ```bash
    docker build -t express-api .
    ```

2. Run the Docker container:

    ```bash
    docker run -p 3000:3000 express-api
    ```

## API Endpoints

### Students

- GET /students - Get all students
- GET /students/:id - Get a specific student
- POST /students - Create a new student
- PUT /students/:id - Update a student
- DELETE /students/:id - Delete a student

### Teachers

- GET /teachers - Get all teachers
- GET /teachers/:id - Get a specific teacher
- POST /teachers - Create a new teacher
- PUT /teachers/:id - Update a teacher
- DELETE /teachers/:id - Delete a teacher

## Project Structure

```bash

├── src/
│   ├── controllers/
│   │   ├── StudentController.js
│   │   └── TeacherController.js
│   ├── database/
│   │   ├── students.json
│   │   └── teachers.json
│   ├── models/
│   │   ├── Student.js
│   │   └── Teacher.js
│   ├── routes/
│   │   ├── main.js
│   │   ├── students.js
│   │   └── teacher.js
│   └── views/
├── .dockerignore
├── .env
├── Dockerfile
├── index.js
└── package.json
```

## Dependencies

- express : ^4.21.2 - Web framework
- dotenv : ^16.4.7 - Environment variable management
- nodemon : ^3.1.9 - Development server with hot reload

## Development

The project uses nodemon for development, which automatically restarts the server when file changes are detected.

## Docker Support

The project includes Docker configuration for containerization. The Dockerfile sets up a Node.js environment and runs the application in a container.
