'use strict';
const User = require('../../models/User.js');
// passport local방식으로 로그인
// passport는 session객체 안에 passport객체를 넣어둠! 
const bcrypt = require('bcrypt');
module.exports = (app) => {
    const passport = require("passport");
    const LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session()); 

    passport.serializeUser((user, done)=> {    
        console.log('serialize');    
        done(null, user);
    });
    passport.deserializeUser((user, done)=> {
        console.log('deserialize >> ',user);   
        done(null, user);
        
    });
    passport.use(new LocalStrategy(// local 방식 미들웨어(중간검사)
        {
            usernameField : "email",
            passwordField : "password",
        },
        async(id, pw, done) => {
            console.log(`내가 친 ID >> ${id}`);
            console.log(`내가 친 PW >> ${pw}`);

            const user = await User.findOne({email : id});
            console.log(`찾은 user >> ${user}`);
            let { password } = user; //user객체의 password;
            if(user){
                // user가 찾아졌을경우
                let hashedResult = await bcrypt.compare(pw, password);
                if(hashedResult){
                    console.log('로그인 완료!');
                    return done(null, user); //2번쨰 파라미터에 false가 오지않아!
                }else{
                    console.log('비번이 올바르지 않습니다!');
                    return done(null, false, {
                        message : '비밀번호 오류!(email은 맞음.)',
                    })

                }
            }else{
                console.log('회원이 아닙니다.');
                return done(null, false, { message : '등록된 사용자가 없습니다.' });
                // 여기까지 검사가 끝나고 다시 authenticate의 redirect코드로 이동함. 
            }
        }
    ))


    return passport;
}