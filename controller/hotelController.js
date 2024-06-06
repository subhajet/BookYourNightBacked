const Hotel = require("../model/hote.model")

const getHotelHandller = async(req, res) => {
    const hotelCategory = req.query.category
    try{
        let hotels
        if(hotelCategory){
            hotels = await Hotel.find({category: hotelCategory})
        }else {
            hotels = await Hotel.find({});
        }
         
        hotels ? res.json(hotels) : res.status(404).json({message: "No data found"})
    }catch(err){
        console.log(err);
    }
}

module.exports = getHotelHandller