'use strict';
const express = require('express');
// 노트북 생성 : POST : /notebook
// 노트북 하나 검색 : GET : /notebooks/:id
// 노트북 전체 검색 : GET : /notebooks
// 노트북 정렬 : GET : /notebook? sort = value
module.exports = () => {
    const router = express.Router();

    // 1. 노트북 생성(관리자에서!) => POST : /notebook
    router.post('/notebook', async(req,res) => {
        try{
            return console.log('노트북 생성 완료!');
        }catch(err){
            return console.log(err);
        }
    })
}