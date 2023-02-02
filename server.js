const express = require('express');
const app = express()

const billsContoller = require('./backend/routes/bills')
require("dotenv").config({ path: "./backend/config/.env" });

app.use(express.json())

app.use('/', billsContoller)
console.log(process.env.PORT)













 app.listen(process.env.PORT || PORT,(req, res)=>{
    console.log(`running on 2110`)
})