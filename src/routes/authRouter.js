'use strict';
const express = require('express');
const User = require('../models/User.js');
const multer = require('multer');
const Storage = multer.diskStorage(
    {
        destination : "./src/uploads", // 파일이 저장될 folder설정
        filename : (req, file, cb) => {
            // image filename setting! 
            cb(null, file.originalname);
        },
        // 즉, image file이 저장될 저장소와 파일이름 설정해놓음. 
        // image스키마 변경 후 filename설정
    }
)
const upload = multer({ storage : Storage }); // 이거뒤에 .single을 사용해서 router middleware로 넣어줄거임 
const bcrypt = require('bcrypt'); // 비밀번호 저장할 때 plain문이 아니라 hashed문으로 저장할거야. 

module.exports = (passport) => {
    const router = express.Router();
    
    // 1. 회원가입
    router.post('/sign-up', upload.single("img") ,async(req,res) => {
        try{
            
            const { email, password } = req.body;
            
            let user = new User({
                email : email,
                password : password,              
                img : {
                    data : req.file.filename, // req.file.filename으로 img찾기~
                    contentType : 'image/png',
                }
            })
            let saveUser = await user.save(); // 저장! 
            console.log(saveUser); // 저장된 js객체 출력! -> mongoose덕분임. 

        }catch(err){
            return console.log(err);
        }
    })

    // 2. 로그인 
    router.post('/local-process', 
        passport.authenticate('local', { // 'local'에서 로그인 성패 여부 따지고 따져지면 redirect코드로 온다. 
            successRedirect : '/index',
            failureRedirect : '/sign-up/index',
        })
        // 1. 먼저 로그인 router를 타고 들어온다. 
        // 2. passport.authenticate 'local'방식으로 한다고 지정한다. 
        //  - 성공, 실패 시 리다이렉트 페이지도 지정. 
        // 3. 그럼 어떻게 성공인지 실패인지 알아?
        // passport.use로 간다. => 거기서 성공 실패 판별.
    )
    return router;
}