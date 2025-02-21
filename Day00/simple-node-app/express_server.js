// npm install express
const express = require("express");
const app = express();
app.use(express.json()); //MiddleWare to parse JSON Body

app.get("/", (req, res) => {
    res.send("Hello, World!");
});
//Sample GET API that return JSON
app.get("/user", (req, res) => {
    const user = {name: "Rama", "age": 34, "id": "id01"}
    res.json(user);
})

//Sample POST API that response json
app.post("/user", (req, res) => {
    let reqBody = req.body
    console.log(reqBody);
    const response = {"resCode": 200, "resBody": "Success", "request": reqBody}
    res.json(response)
});
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
});


/*
 node express_server.js

curl --location 'http://localhost:8080/user'

curl --location 'http://localhost:8080/user' \
--header 'sessionid: sessionid-1' \
--header 'Content-Type: application/json' \
--data '{
  "carRegNo": "car2",
  "parkingNo":"park2",
  "parkingStatus":"start"
}
'
 */
