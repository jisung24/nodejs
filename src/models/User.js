'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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

// 회원가입 전에 bcrypt모듈을 사용해서 plain pw -> hashed pw로 만들고 저장
// 이후 로그인 할 때 bcrypt.compare를 사용해서 해독한 후 로그인
userSchema.pre('save', function(next){
    const user = this
  
    if(user.isModified('password')) {
      bcrypt.genSalt(saltRounds, function(err, salt){
        if (err) return next(err)
        bcrypt.hash(user.password, salt, function(err, hash){
          if (err) return next(err)
          user.password = hash
          next()
      })
    })
    }
    
  })

module.exports = mongoose.model('User', userSchema);