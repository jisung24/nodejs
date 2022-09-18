'use strict';
const express = require('express');

module.exports = () => {
    const router = express.Router();

    // 1. index
    router.get('/index', async(req,res) => {
        try{
            res.render('index.ejs');
        }catch(err){
            return console.log(err);
        }
    })

    // 2. 회원가입 페이지
    router.get('/sign-up/index', async(req,res) => {
        try{
            res.render('signUp.ejs');
        }catch(err){
            return console.log(err);
        }
    })

    // 3. 로그인 
    router.get('/local/index', async(req,res) => {
        try{
            res.render('login.ejs');
        }catch(err){
            console.log(err);
        }
    })

    // 4. 아이템 페이지
    router.get('/item/index', async(req,res) => {
        res.render('./admin/newItem.ejs');
    })
    return router;
}