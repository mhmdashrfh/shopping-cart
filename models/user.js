const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userShcema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

userShcema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
}

userShcema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

const user = mongoose.model('user', userShcema);
module.exports = user;