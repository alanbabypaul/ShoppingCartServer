const express = require('express')
const productController = require('../Controllers/productController')

const router = new express.Router()
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../MidlleWares/jwtMiddleware')
const wishlistController = require('../Controllers/wishlistController')
const cartController = require('../Controllers/cartController')



// get all products
router.get('/products/all',productController.getAllProductsController)
// register
router.post('/user/register',userController.registerController)
// Login
router.post('/user/login',userController.loginController,)
// get single product
router.get('/product/get/:id',productController.getProductController)
// addto wishlist
router.post('/wishlist/add',jwtMiddleware,wishlistController.addtowishlistController)
// get wishlist
router.get('/wishlist/get-allproducts',jwtMiddleware,wishlistController.getWishlistController)
// delete item form wishlist
router.delete('/wishlist/remove/:id',jwtMiddleware,wishlistController.removeWishlistItemController)
// addto your cart
router.post('/cart/add',jwtMiddleware,cartController.addtocartController)
// getcart
router.get('/cart/get-all-products',jwtMiddleware,cartController.getCartController)
// increement cart
router.get('/cart/increement/:id',jwtMiddleware,cartController.increementCartController)
// decreement cart 
router.get('/cart/decreement/:id',jwtMiddleware,cartController.decrementCartController)
// delete a item
router.delete('/cart/delete/:id',jwtMiddleware,cartController.removeCartItemController)
// delete all item
router.delete('/cart/empty',jwtMiddleware,cartController.emptyCartController)


module.exports = router
