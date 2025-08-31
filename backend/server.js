const express=require("express");
const connectDb=require("./config/connectionDb");
const dotenv=require('dotenv').config()
const app=express();
const PORT=process.env.PORT|| 3000;
connectDb();
app.use(express.json())
app.use("/recipe",require("./routes/recipe"))
app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`);
})