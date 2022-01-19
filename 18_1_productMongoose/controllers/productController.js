const productModel = require('../model/productModel')


//creat a new product
const createProduct = async(req,res)=>{
    const product = new productModel(req.body) 
    try{
        const result = await product.save()
        return res.status(201).send(result)
    }
    catch(e){
        return res.status(500).send(e)
    }
}

//get All product
const getAllProduct = async(req,res)=>{
    try{
        const products = await productModel.find()
        res.send(products)
    }
    catch(e){
        res.status(500).send(e)
    }
}

//get one product
const getProduct = async(req,res)=>{
    const id = req.params.id
    try{
        const product = await productModel.findById(id)
        if(!product){
            return res.status(404).send('id is not valid')
        }
        res.send(product)
    }catch(e){
        res.status(500).send(e)
    }
}

//get product is a active= true
const getActive = async(req, res)=>{
    try{
        const productActive = await productModel.find({isActive:true})
        res.send(productActive)
    }
    catch(error){
        res.status(500).send(e)
    }
}

//get products by specfice price
const getByRange = async(req,res)=>{
    const { min, max } = req.body;
    try {
        const products = await productModel.find({ "details.price": { $gte: min, $lte: max },
    });
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
}
//update product
const updateProduct = async(req, res)=>{
    const update = Object.keys(req.body)
    const allowedUpdate = ['isActive', 'details.discount']
    const invalidOperation = update.every((update)=> allowedUpdate.includes(update))

    if(!invalidOperation){
        return res.status(400).send('invalid output')
    }
    try{
        const product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true
        })
        if(!product){
            res.status(404).send()
        }
        res.send(product)
    }
    catch(e){
        res.status(400).send(e)
    }
}

//delete one product
const deleteProduct = async(req, res)=>{
    try{
        const product = await productModel.findByIdAndDelete(req.params.id)
        if(!product){
            return res.status(404).send()
        }
        res.send(product)
    }
    catch(e){
        res.status(500).send()
    }
}


//delete all product 
const deleteAllProduct = async(req,res)=>{
    try{
        const products = await productModel.deleteMany()
        res.send(products)
    }
    catch(e){
        res.status(500).send(e)
    }

}
module.exports={
    createProduct,
    getProduct, 
    getActive, 
    getByRange,
    updateProduct, 
    deleteProduct, 
    deleteAllProduct, 
    getAllProduct
}