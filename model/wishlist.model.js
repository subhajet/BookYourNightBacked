
const mongoose = require('mongoose')

const whishlistSchema = new mongoose.Schema({
    hotelId: {type: String, required: true}
})

const wishlist = mongoose.model("wishlist", whishlistSchema);

module.exports = wishlist