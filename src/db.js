'use strict';
const mongoose = require('mongoose');
require('dotenv').config({ path : "./src/env/variables.env" }); // config함수를 통해서 환경변수 파일지정. 
const { DB_URL } = process.env||3000; // process.env를 통해 환경변수에 접근할 수 있다. 
async function dbConnect(){
    try{
        let db = await mongoose.connect(DB_URL, {
            useNewUrlParser : true,
        })
        return console.log('mongoDB connected successfully!');
    }catch(err){
        return console.log(err);
    }
}

module.exports = dbConnect; // 함수를 module.exports해줌 => app.js에서 require해서 호출해줄예정.