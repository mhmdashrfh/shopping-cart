const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    imgPath: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDecsribtion: {
        required: true,
        type: {
            storageCapacity: Number,
            numberOfSim: String,
            rearCameraResolution: Number,
            displaySize: Number
        }
    },

    productPrice: {
        type: Number,
        required: true
    },
});

const product = mongoose.model('product', productSchema);
module.exports = product;
