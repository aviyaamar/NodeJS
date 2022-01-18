const productModel = require('../model/productModel')

const createProduct = async(req,res)=>{
    const {name, category, isActive, details}= req.body

    const product = new productModel({
        name: name, 
        category: category, 
        isActive: isActive, 
        details: details
    })

    try{
        const result = await product.save()
        return res.status(201).send(result)
    }
    catch(e){
        return res.status(500).send(e)
    }

}
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

const getActive = async(req, res)=>{
    try{
        const productActive = await productModel.find({isActive:true})
        res.send(productActive)
    }
    catch(error){
        res.status(500).send(e)
    }
}
const getByRange = async(req,res)=>{

try{
    const product = await productModel.find({"details.price":{$gt: 20, $it: 200}})
    res.send(product)
}
catch(e){
    res.status(500).send(e)
}
}
module.exports={
    createProduct,
    getProduct, 
    getActive, 
    getByRange
}