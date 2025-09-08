const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    type : {
        type:String,
        min : [3,'Minimum 20 characters required'],
        max : [100,'Maximum 100 characters required'],
        trim: true,
        required:true
    },
    name : {
        type:String,
        min : [3,'Minimum 20 characters required'],
        max : [100,'Maximum 100 characters required'],
        trim: true,
        required:true
    },
    description : {
        type:String,
        min : [30, 'Minimum 30 characters required'],
        max : [200, 'Maximum characters required'],
        trim: true,
        required:true
    },
    price : {
        type:Number,
        min: [50, 'Minimum price is 50'],
        max : [1000000, 'Maximum price is 1000000'],
        required:true
    },
    quantity : {
        type:Number,
        min : [1, 'Minimum quantity is 1'],
        max : [100, 'Maximum quantity is 100'],
        required:true
    },
    isAvailable : {
        type:Boolean,
        required:true
    },
    imageURL :{
        type:String,
        required:true
    },
    createdAt : {
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Product', productSchema);