const mongoose = require('mongoose')
const validator = require('validator')

const product =  mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    }, 
    category:{
        type: String,
        required: true, 
    },
    isActive: {
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
                if(value < 0){
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
        phone:{
            type:String, 
            validate(value){
              if(!validator.isMobilePhone(value,"he-IL"))
                  throw new Error('number is must number israel ')
              
            }

        }, 
        DateAdded:{
            type: Date,
            default:new Date()
        }
        
    }
})

const productModel = mongoose.model('products',product)
module.exports = productModel