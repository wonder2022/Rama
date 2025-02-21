# Calculator Applicatio

## Initialize the Node.js Project

    mkdir calculator-app
    cd calculator-app
    npm init -y

## Install Dependencies

    npm install express body-parser cors

    express → Web framework for Node.js
    body-parser → Middleware to parse JSON requests
    cors → Enables Cross-Origin Resource Sharing

## Create Calculator
    
    touch calculator.js

## Start Calculator
    node calculator.js

## Testing

    curl "http://localhost:8080/add?a=5&b=3"
    
    curl -X POST http://localhost:8080/subtract -H "Content-Type: application/json" -d '{"a": 10, "b": 4}'

    curl -X PUT http://localhost:8080/multiply -H "Content-Type: application/json" -d '{"a": 6, "b": 2}'

    curl -X DELETE http://localhost:8080/divide -H "Content-Type: application/json" -d '{"a": 8, "b": 2}'
