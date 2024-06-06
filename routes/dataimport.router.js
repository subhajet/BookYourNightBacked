const express = require('express');

const Hotel = require("../model/hote.model")
const hotels = require("../data/hotels")


const router = express.Router();

router.route("/")
    .post( async (req,res) => {
        try {
            await Hotel.deleteMany();
            const hotelsInDB = await Hotel.insertMany(hotels.data)
            res.json(hotelsInDB)
        }catch(err){
            console.log(err);
            res.json({message: "could not add to DB"});
        }
    })

module.exports = router