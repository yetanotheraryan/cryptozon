require("dotenv").config();
const express = require("express")
const app = express()
const mongoose =  require("mongoose")
require("./db/conn")
const cors = require("cors")


const Products = require("./models/productsSchema")

const DefaultData = require("./defaultdata")

app.use(express.json())
app.use(cors())
const port = 8005



app.listen(process.env.PORT||port, ()=>{
    console.log(`server is running on: ${port}`)
})

DefaultData()
