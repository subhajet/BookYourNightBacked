const express = require('express');
const router = express.Router();

const getHotelHandller = require("../controller/hotelController")

router.route("/")    
    .get(getHotelHandller)

module.exports = router;