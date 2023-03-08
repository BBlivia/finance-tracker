const express = require('express');
const app = express()

const PORT = 2110
require("dotenv").config({ path: "./backend/config/.env" });

app.use(express.json())
console.log(process.env.PORT)

app.get('/', (req, res)=>{
    res.json({message: 'hello'})
})














 app.listen(process.env.PORT || PORT,(req, res)=>{
    console.log(`running on 2110`)
})