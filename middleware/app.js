const express=require('express');
const app=express();
const user=require('./routes/user');
const profile=require('./routes/profile');


//middleware için
//helper nesnesını kullanarak dahil edıyorum 
const isLogin = require('./helper/isLogin');

app.use(isLogin);
app.use('/user',user);
app.use('/profile',profile);

app.listen(3000,()=>{
    console.log("express server calıstırıldı");
});