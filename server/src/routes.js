const express = require('express')
const productController = require('./controllers/productController')

const router = express.Router()

router.use(express.json())

router.get('/products', productController.getAllProducts)

module.exports = router