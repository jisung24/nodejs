'use strict';
const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema(
    {
        // class라고 생각하자 => new Item으로 이제 도큐먼트 생성 후 집어넣어주면 돼! 
        itemType : {
            // item category : item1,2,3,4,5이렇게 분리하자!
            type : String,
            required : true,
            // trim : true,
        },
        price : {
            type : Number,
            required : true,
            min : 1,
            max : 10000000,
        },
        img : {
            data : Buffer,
            contentType : String,
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Item', itemSchema);