const express = require ('express');
const cors = require('cors');


const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is working"
    })
})

app.listen(4000,()=>{
    console.log("server is ");
})

