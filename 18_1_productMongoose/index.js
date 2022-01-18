const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/productRouter')

const PORT = 5000

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(router)


mongoose.connect('mongodb://127.0.0.1:27017/products', {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
}).then(()=>{
    console.log("database connect");
});

app.listen(process.env.PORT || PORT, () =>{
    console.log(`app is start at ${PORT}`);
})