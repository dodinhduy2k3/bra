// nhúng express
const express = require("express")
// nhúng env (có tác dụng là nhưng file có trong nó sẽ không bị đẩy nên github)
require("dotenv").config()

const app = express()
const port = 3000;

// nhúng pug 
app.set('views', './views')
app.set('view engine', 'pug')


//


// router home

const router = require('./router/client/index.router');
router(app)
// // products

const database = require("./config/database.js")
database.connect()

app.listen(port,() =>{
    console.log(`lang nghe cong ${port}`)
})