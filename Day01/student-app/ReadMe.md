# Student Application

student-app/
│── src/
│   ├── controllers/       # Handles request logic
│   │   ├── student.controller.js
│   ├── routes/            # Defines API endpoints
│   │   ├── student.routes.js
│   ├── services/          # Business logic (service layer)
│   │   ├── student.service.js
│   ├── models/            # Sequelize ORM (MySQL models)
│   │   ├── student.model.js
│   ├── config/            # Configuration files
│   │   ├── db.config.js
│   │   ├── env.config.js
│   ├── middlewares/       # Middleware (auth, validation)
│   ├── utils/             # Helper functions
│   ├── app.js             # Main Express app
│   └── server.js          # Starts the microservice
│
├── tests/                 # Unit & Integration Tests
│   ├── student.test.js
│
├── .env                   # Environment variables
├── .gitignore             # Ignore node_modules, env files
├── package.json           # Dependencies
├── README.md              # Documentation

## Initialize the Node.js Project

    mkdir student-app
    cd student-app
    npm init -y

## Install Dependencies

    npm install express mysql2 sequelize body-parser dotenv cors morgan
    npm install --save-dev jest supertest nodemon

## Start application
    node server.js

## Test application

### Save Data
    
    curl --location 'http://localhost:8080/student/save' \
    --header 'Content-Type: application/json' \
    --data '{
    "name": "John Doe",
    "schoolName": "XYZ High School",
    "age": 16,
    "gender": "Male"
    }
    '

### Read Data
    
    curl --location 'http://localhost:8080/student/read'

### Update Data 

    curl --location --request PUT 'http://localhost:8080/student/update?name=John%20Doe&age=20'

### Delete Data

    curl --location --request DELETE 'http://localhost:8080/student/delete?name=John%20Doe'
    
