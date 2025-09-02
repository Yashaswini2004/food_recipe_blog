const express=require("express");
const cors=require("cors")
const connectDb=require("./config/connectionDb");
const dotenv=require('dotenv').config()
const app=express();
const PORT=process.env.PORT|| 3000;
connectDb();
app.use(express.json())
app.use(cors())
app.use(express.static("public"))
app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))
app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`);
})