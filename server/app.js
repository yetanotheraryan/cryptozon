const express = require("express")
const app = express()

const port = 8005

app.listen(process.env.PORT||port, ()=>{
    console.log(`server is running on: ${port}`)
})


// aman is here 