const express=require("express")
const fs=require("fs")
const mysql=require("mysql2");
const parser=require('body-parser');
const url=require('url');


const app=express()

// app.get('/',function(req,res){
//     res.end('Hello world');
// })




app.listen(2000,function(req,res){

    console.log('server started');
})