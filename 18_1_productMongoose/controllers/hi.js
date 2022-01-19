const {min, max} = req.body
try{
    const product = await productModel.find({"details.price":{$gt: min, $it: max}, 
})
    res.send(product)
}
catch(e){
    res.status(500).send(e)
}
