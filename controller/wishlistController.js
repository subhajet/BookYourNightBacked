
const Wishlist = require("../model/wishlist.model")

const createWishlistHandler = async (req, res) =>{
    console.log("Request body:", req.body);
    console.log("Wishlist model:", Wishlist);
    try{
        const savedWishlist = await Wishlist.create(req.body); 
        res.status(201).json(savedWishlist)
    }catch(err)
    {
        res.status(500).json({message:"failed to create wishlist"})  
    }
}
const deleteWishlistHandler =  async (req, res) => {
    try{
        await Wishlist.findByIdAndDelete(req.params.id);
    res.json({message:"Hotel Deleted from wishlist"})
    }catch(err)
    {
        res.status(500).json({message:"Could not delete hotel from wishlist"})
    }
}

const getWishlistHandler = async (req,res) =>{
    try{
        const wishlist = await Wishlist.find({})
        wishlist ? res.json(wishlist) : res.json({message:"No items found in the wishlist"})
    }catch(err){
        console.log(err);
    }
}

module.exports = {createWishlistHandler, deleteWishlistHandler, getWishlistHandler}