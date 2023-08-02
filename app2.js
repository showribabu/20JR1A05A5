const express=require("express")
const fs=require("fs")
const mysql=require("mysql2");
const parser=require('body-parser');
const url=require('url');
const port = 3000;

const app=express()

// app.get('/',function(req,res){
//     res.end('Hello world');
// })

app.get('/trains',function(req,res){
    const urls = req.query.url;
    if (!urls) {
        return res.end('Not Avilable....!!');
      }
      const numbers = [];
    })
  


app.listen(2000,function(req,res){

    console.log('server started');
    
})


