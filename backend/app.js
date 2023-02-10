const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");

//middlewares
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("shubh is doing good");
})

try {
    function start(){
        connectDB(process.env.MONGO_URI);
        app.listen(3000, console.log("server listening on port:3000"));
    }    
} catch (error) {
    console.log(error);
}

start();