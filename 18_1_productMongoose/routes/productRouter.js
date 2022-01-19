const express = require('express')
const router = express.Router()
const { createProduct, getProduct, getActive, getByRange, updateProduct,deleteProduct, deleteAllProduct, getAllProduct } = require('../controllers/productController')

router.post('/product', (req, res)=>{
    createProduct(req,res)
})
router.get('/product/:id', (req, res)=>{
    getProduct(req, res)
})
router.get('/active', (req, res)=>{
    getActive(req, res)
})
router.get('/product', (req,res)=>{
    getAllProduct(req,res)
})

router.get('/price', (req, res)=>{
    getByRange(req, res)
})

router.put('/update/:id', (req, res)=>{
    updateProduct(req,res);
})
router.delete('/:id', (req, res)=>{
    deleteProduct(req, res)
})
router.delete('/', (req, res)=>{
    deleteAllProduct(req, res)

})
module.exports = router