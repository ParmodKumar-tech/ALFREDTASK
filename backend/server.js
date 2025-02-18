
require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const PORT=process.env.PORT;
const dbURL=process.env.MONGO_URL;
const cors=require("cors");
const flashcardRoute=require("./routes/flashcard");
const userRoute=require("./routes/user");

async function connectDB() {
    try{
        await mongoose.connect(dbURL);
        console.log("Connect DB");
    }
    catch(e){
        console.log(e.message);
    }
}
connectDB();

app.use(cors())
app.use(express.json())
app.use("/login",userRoute);
app.use("/flashcard",flashcardRoute);


app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})