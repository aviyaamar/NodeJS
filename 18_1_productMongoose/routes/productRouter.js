const express = require('express')
const router = express.Router()
const { createProduct, getProduct, getActive, getByRange} = require('../controllers/productController')

router.post('/product', (req, res)=>{
    createProduct(req,res)
})
router.get('/product/:id', (req, res)=>{
    getProduct(req, res)
})
router.get('/active', (req, res)=>{
    getActive(req, res)
})

router.get('/price', (req, res)=>{
    getByRange(req, res)
})
module.exports = router