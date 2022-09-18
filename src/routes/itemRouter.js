'use strict';
const express = require('express');
// 노트북 생성 : POST : /items

module.exports = () => {
    const router = express.Router();
    
    
     // << GET >> 

    // 1. 노트북 하나 검색(GET : /items/:id)
    router.get('/:id', async(req,res) => {
        const { id } = req.params;
        console.log(`id가 ${id}인 노트북`);
    })

    // 2. 노트북 전체검색 페이지 (GET : /items/all)
    router.get('/all', async(req,res) => {
        console.log('노트북 전체 페이지!');
    })


    // POST

    // 1. 노트북 생성(관리자역할 => POST : /items)
    router.post('/', async(req,res) => {
        console.log('노트북 생성완료!')
    })
    return router;
}