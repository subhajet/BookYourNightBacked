const express = require('express');

const verifyUser = require("../middleware/verifyuser")

const router = express.Router();

const wishlistController = require("../controller/wishlistController")

const {createWishlistHandler, deleteWishlistHandler, getWishlistHandler} = wishlistController

router.route("/")
    .post(verifyUser,createWishlistHandler )

router.route("/:id")
    .delete(verifyUser,deleteWishlistHandler)

router.route("/")
    .get(verifyUser,getWishlistHandler )

module.exports = router;