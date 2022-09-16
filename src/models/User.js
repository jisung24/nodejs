'use strict';
const mongoose = require('mongoose');
// const imageSchema = new mongoose.Schema(
//     {
//         image : {
//             data : Buffer,
//             contentType : String,
//         }
//     },
// )
const userSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            required : [true, "email field is essential!!"],
            unique : [true, "same email is already exist!"],
            match : /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            trim : true,
            lowercase : true, // 비번에는 사용하면 bcrypt해독할때 문제생김. 
        },
        password : {
            type : String,
            required : true,
            minlength : 2,
            maxlength : 15,
        },
        img : {
            data : Buffer,
            contentType : String,
        }
    }
)

module.exports = mongoose.model('User', userSchema);