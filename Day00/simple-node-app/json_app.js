//Parsing Json String to Object

const jsonString = '{"name": "Alice", "age": 25, "city": "New York"}';
const jsonObject= JSON.parse(jsonString);
console.log(jsonObject.name);

//Converting Object to json String

const user={name:"Rama",age:30,city:"Bangalore"};
console.log(user);
const userData = JSON.stringify(user);
console.log(userData);

//Write json to file
console.log("Writing Json Data");
const newUser={name:"Rama",age:30,address:"Bengaluru",id:"id1"}
const fs =require("fs");
fs.writeFile("data.json",JSON.stringify(newUser,null,2),(err)=>{
    if(err){
        console.error("Error Writing file:",err);
        return;
    }
    console.log("JSON file has been saved");
})

console.log("Reading Json Data")
//Read JSON File and parse content
fs.readFile("data.json","utf8",(err,data)=>{
    if(err){
        console.error("Error while reading file",err);
        return;
    }
    const jsonData=JSON.parse(data);
    console.log(jsonData)
})
