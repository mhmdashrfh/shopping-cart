const Products = require('../models/products')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://MohamedAshraf:0000@cluster0.72afgdd.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
  if (err){
    console.log(err);
  }else{
    console.log('Connected to mongo db ...');
  }
})

const product = [new Products({
    imgPath: "/images/M33.jpg",
    productName: 'Samsung Galaxy M33',
    productDecsribtion: {
        storageCapacity: 128,
        numberOfSim: 'Dual SIM',
        rearCameraResolution: 48,
        displaySize: 6.6
    },
    productPrice: 8899

}),
new Products({
    imgPath: '/images/10C.jpg',
    productName: 'Xiaomi Redmi 10C',
    productDecsribtion: {
        storageCapacity: 128,
        numberOfSim: 'Dual SIM',
        rearCameraResolution: 50,
        displaySize: 6.71
    },
    productPrice: 4625

}),
new Products({
    imgPath: '/images/S21.jpg',
    productName: 'SAMSUNG Galaxy S21',
    productDecsribtion: {
        storageCapacity: 256,
        numberOfSim: 'Dual SIM',
        rearCameraResolution: 56,
        displaySize: 6.04
    },
    productPrice: 21999

}),
new Products({
    imgPath: '/images/A23.jpg',
    productName: 'Samsung Galaxy A23',
    productDecsribtion: {
        storageCapacity: 128,
        numberOfSim: 'Dual SIM',
        rearCameraResolution: 48,
        displaySize: 6.4
    },
    productPrice: 5999

}),
new Products({
    imgPath: '/images/Y8p.jpg',
    productName: 'HUAWEI Y8p',
    productDecsribtion: {
        storageCapacity: 128,
        numberOfSim: 'Dual SIM',
        rearCameraResolution: 36,
        displaySize: 6.3
    },
    productPrice: 7999

}),
new Products({
    imgPath: '/images/iPhone-14.jpg',
    productName: 'Apple iPhone 14 Pro Max',
    productDecsribtion: {
        storageCapacity: 256,
        numberOfSim: 'Dual SIM',
        rearCameraResolution: 72,
        displaySize: 6.7
    },
    productPrice: 49999.

})]

var done = 0
for (var i = 0; i < product.length; i++) {
    console.log(i);
    product[i].save((err, doc)=>{
        if(err){
            console.log(err);
        }
        console.log(doc);
        done++
        if(done === product.length){
            mongoose.disconnect();
        }
    })
    
}
// product.forEach(element => {
//     product[element].save((err, doc) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log(doc);
//     })
// });