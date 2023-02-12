const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send({hi:'there'});
});
const PORT=process.env.PORT||5000;//process.env is for production purposes (port provided by deployment tool) 
app.listen(5000);