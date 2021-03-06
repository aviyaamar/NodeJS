const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce', {
    useNewUrlParser: true,
})

const product =  mongoose.model('product', {
    name: {
        type: String, 
        required: true,
        unique: true
    }, 
    category:{
        type: String,
        required: true, 
    },
    isActiv: {
      type: Boolean, 
      required: false, 
    },
    details:{
        description:{
            type:String, 
            required: true, 
            unique: true, 
            minlength:10, 
            validate(value){
                if(value.length <= 10){
                    throw new Error('description must have 10 charcter')
                
            }
           }
        
        },
        price:{
            type: Number, 
            required:true, 
            default:0,
            validate(value){
                if(value < 10){
                    throw new Error('price must be a positive number')
                }

            }
        }, 
        discount:{
            type:Number, 
            required: false, 
            default: 0
        }, 
        images:{
            type:[String], 
            validate(value){
                if(value.length < 2){
                    throw new Error('you must be have is two images')
                }

            }
        }, 
        phone: {
            type: String,
            required: true,
            validate(value){
           if (!validator.isMobilePhone(value, "he-IL")){
                  throw new Error('Must be isreli phone')
              }
          }
          },
        DateAdded:{
            type: Date,
            default:new Date()
        }
        
    }
})
const tshirt = new product({
    name: "gummmmm",
    category: "snakes",
    isActive: true,
    details: {
      description: "gummm five menta",
      price: 10,
      discount: 19,
      images: [
        "facbook.com",
        "google.com",
      ],
      // phone: "+972546109516",
    },
  });
  
  tshirt
    .save()
    .then(() => {
      console.log("suceess adding tshirt", tshirt);
    })
    .catch((error) => {
      console.log("Error", error);
    });
  