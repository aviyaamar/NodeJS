const express = require('express')
const app =  express();
const numbers = [1,2,3,4,5]

app.use(express.json());

app.get('/', (req,res)=>{
    res.send(numbers)
})
app.get('/number', (req, res)=>{
    res.send(numbers)
});
app.post("/number", (req, res) => {
    let num = req.body.number
    numbers.push(num)
    res.status(201).send({numbers});
  });

  app.delete("/number/:id/", (req, res) => {
    console.log(req.params);
    let id=  req.params
    let filter = numbers.find((num)=> num === id)
    numbers.splice(filter,1)
    res.status(200).send({filter})
  });

  app.put("/number/:id/", (req, res) => {
    const id = Number(req.params.id)
    let updateNun  = Number(req.body.number)

    const index = numbers.indexOf(id)
    numbers.splice(index, 1, updateNun)
    
    res.status(200).json('Product updated')
  });

const PORT = 3003
app.listen(PORT, ()=>{
    console.log(`listening to port: ${PORT}`);
})