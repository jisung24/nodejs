'use strict';
const express = require('express');
// 노트북 생성 : POST : /items

module.exports = () => {
    const router = express.Router();
    
    
    // 1. 노트북 생성(관리자역할 => POST : /items)
    router.post('/', async(req,res) => {
        console.log('노트북 생성완료!')
    })
    return router;
}