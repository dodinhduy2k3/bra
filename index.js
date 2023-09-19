const express = require("express")
require("dotenv").config()
const app = express()
const port = 3000;


app.get('/', (req, res) =>{

    res.send(" do dinh duy")
})

const database = require("./config/database.js")
database.connect()

app.listen(port,() =>{
    console.log(`lang nghe cong ${port}`)
})