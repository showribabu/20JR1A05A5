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

app.get('/numbers',function(req,res){
    const urls = req.query.url;
    if (!urls) {
        return res.end('Not Avilable....!!');
      }
      const numbers = [];

  try {
    //data from the url...
    const urlList = Array.isArray(urls) ? urls : [urls];

    //lopp iteration
    for (const url of urlList) {
      const parsedUrl = new URL(url);

      // Fetch the JSON data from the URL
      const response = axios.get(parsedUrl.href);
      const jsonData = response.data;

      // Check if the response contains the 'numbers' array
      if (Array.isArray(jsonData.numbers)) {
        numbers.push(...jsonData.numbers);
      }
    }

    return res.json({ numbers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`number-management-service listening at http://localhost:${port}`);
})



app.listen(2000,function(req,res){

    console.log('server started');
    
})


