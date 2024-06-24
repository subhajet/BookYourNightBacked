const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const hotelDataAddedToDBRouter = require("./routes/dataimport.router") 
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router") 


const hotelRouter = require("./routes/hotel.routes")
const categoryRouter = require("./routes/category.router")
const singleHotelRouter = require("./routes/singlehotel.router")
const authRouter = require("./routes/auth.route")
const wishlistRouter = require("./routes/wishlist.router")


const connectDB = require("./config/dbconfig")
const app = express();

app.use(express.json())
connectDB();
const PORT = 3500; 

app.get("/", (req,res) => {
    res.send("Hello Geeks")
})

app.use("/api/hoteldata", hotelDataAddedToDBRouter)
app.use("/api/categorydata", categoryDataAddedToDBRouter)
app.use("/api/hotels", hotelRouter)
app.use("/api/category",categoryRouter)
app.use("/api/Hotel",singleHotelRouter ) 
app.use("/api/auth",authRouter)
app.use("/api/wishlist", wishlistRouter)

mongoose.connection.once("open", () => {
    console.log("connected to DB");
    app.listen(process.env.PORT || PORT, () =>{
        console.log("server is UP and Running");
    })  
})

