'use strict';
// Model : 스키마를 만들어서 Model로 변환시킨다!! 
// Mongoose라이브러리를 이용하여 스키마를 만들고, 모델로 변환시킨다.
// 스키마는 class이다. Model은 그 class에서 생성되는 인스턴스이다! 
const mongoose = require('mongoose');
const { Schema } = mongoose;
const itemSchema = new Schema(
    {
        title : { // 상품이름 
            type : String,
        },
        price : { // 가격
            type : Number,
            min : 1,
            max : 1000000
        },
        content : {
            type : String,
            required : true,
        }
    },
    {
        timestamps : true,
    }
)

// 이제 스키마를 모델로 바꿔야함!! 
module.exports = mongoose.model('Item', itemSchema);
// collection이름, 그 콜렉션의 스키마.
// 이렇게 모델을 만들어줘야 mongodb내에서 document crud작업을 할 수 있다.
// 이렇게 해주면 이제 스키마를 객체처럼 사용할 수 있다.
// 그래서 객체 즉 document를 생성할 수 있다.  