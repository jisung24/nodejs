'use strict';
const app = require('../../app.js'); // app.js에서 내보낸 application객체를 여기서 사용한다. 
require('dotenv').config({ path : "./src/env/variables.env" }); // config함수를 통해서 환경변수 파일지정. 
const { PORT } = process.env||3000; // process.env를 통해 환경변수에 접근할 수 있다. 

async function start(portNumber){
    try{
        let server = await app.listen(portNumber);
        return console.log(`${portNumber}server is start!`);
    }catch(err){
        return console.log(err);
    }
}

start(PORT); // 서버실행 함수 호출! 
