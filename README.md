# all-of-nodeJS

## `프로젝트 설계`

## 1. 기능흐름 
- ## 사용자( USERS ) 
    - 메인 페이지(GET : /index)
    - 노트북 all( GET : /notebookAll/index ) => `매우중요`
        - 페이징 처리 
        - 노트북 정렬 
            - 인기순( GET : /notebooks ? sort = "new" )
            - 높은가격 ( GET : /notebooks ? sort = "priceDesc" )
            - 낮은가격 ( GET : /notebooks ? sort = "priceAsc" )
            - 판매량순 ( GET : /notebooks ? sort = 'sell' )
        - 노트북 보기(item detail) : ( GET : /notebooks/:id )
        - 카테고리(`카테고리를 보면 notebook db field를 알 수 있음`)
            - 회사명(supplierName) : (GET : /notebooks ? supplierName = "apple" )
            - cpu이름(cpuName) : (GET : /notebooks ? cpuName = "cpu1" )
            - 화면크기(monitorSize) : (GET : /notebooks ? monitorSize = 12미만~ 17까지 )
            - ram용량(ramSize) : (GET : /notebooks ? ramSize = 4,8,16,32,64 )
            - 무게(weight) : (GET : /notebooks ? weight = 1.0이상 1.4  1.4~1.7 1.7-2.0 )
                - `이상 이하 쿼리문 사용하기 and or도 사용하기!`
            - `카테고리는 노트북 재정렬 ajax만 사용한다!!`
    - 노트북 사는 tips( GET : /tips/index )
    - 마이페이지 ( GET : /mypages/index )(`user db field 다 표시!`)
        - 표시될 DATA
            - `닉네임`님 안녕하세요`(nickname)`
            - stupping point`(point)`
            - money`(userMoney)`
            - account`(계좌)` => 충전용
            - 구매한 노트북 => `[String](purchase field)` (GET : /order/order-list)
            - 관심상품 => `likes[String]` (GET : /like/likes-list)
            - 구매버튼 => (post : /purchase/index ) => 구매한 노트북에 추가! 
            - 신고list => ( GET : /repost/report-list )


- ## admin(db data 수정 삭제.. 등 관리역할)
    - 노트북 수정, 삭제, 생성 
        - 생성( POST : /notebooks )
        - 수정( PUT : /notebooks )
        - 삭제( DELETE : /notebooks)
    - 회원 수정, 삭제
        - 수정(PUT : /users )
        - 삭제(DELETE : /users )

## `사용 기술`
- 프론트엔드 
    - html 
        - 시멘틱 태그 사용
        - 전반적 태그 이해
    - css 
        - grid, flex layout
        - css 모듈화
        - Media query 반응형 웹
        - animation, transition
    - javascript

- 백엔드 
    - 노드JS
        - 다양한 모듈을 이용해서 express서버 구현하기
# 2022-09-16

## 새벽
- 이미지 file을 multer모듈을 이용해 db에 저장하는 방법 익힘! 
- enctype="multipart/form-data"라는 속성은 req.body와 같이 쓸 경우 undefined라는 값이 나옴. 
- req.file안에 있는 속성인 originalname속성을 이용해 db에 저장함.
## 아침
- img를 multer를 이용해서 저장을 했고, schema저장은 아직 애매함.
- image schema를 어떻게 작성을 해줘야하는지 살짝 걱정.
- multer.diskStorage라는 multer함수의 프로퍼티객체 사용. 
- img schema의 data속성에 req.file.filename으로 파일이름추가. 

# 2022-09-18

## 저녁
- rest api에 대해서 공부하고 project 기능과 그에 따른 rest api를 설계함.
- 일단 react와의 차이점을 알아보기 위해 ejs를 사용했다.
    - static정적 사이트를 사용할 수 밖에 없고, 적절히 ajax기능을 사용했다. 
    - ajax를 사용하지 않으면 ssr로만 짤 수 밖에 없어 서버에 부화가 많이간다.
    - csr을 대표하는 react와 비슷한 기능을 내기 위해 ajax를 많이 사용할 예정이다. 

- react와의 차이점 
    - react는 html은 비어있고 연결 돼 있는 js파일을 다운을 받아 spa를 구현한다.
    - 하지만 ejs + node로는 html을 채워야하고 csr의 비율을 줄일 수 밖에 없었다. 
        - `아직 부족해서 csr을 최대한 이용해 볼 생각이다` + `react를 사용하지않고 필요성을 느껴 볼 생각이다.`

# 2022-09-22

## `새벽`
- fetch함수를 이용하여 crud를 구현할 생각. 


# 2022-09-26

## Back_End
- fetch로 요청을 받아 item검색 기능을 만듦. 
- /items/:id 로 검색(`id는 req.params에 담긴다!`)

## front(media query)
- 프론트엔드는 `grid`레이아웃을 이용한 `반응형`제작
- fetch함수를 이용하여 back_End api를 호출함.


## 2022-10-18
# node js개념정리
## `기초 방향`
    - express는 nodejs런타임에서 웹 서버를 만들기 위한 라이브러리이다. 
    - client와 서버는 http라는 규칙을 이용해서 통신을 한다. 
    - express주요 개념
        - Application 
            - express객체에는 하나의 함수가 할당된다. 
            - 그 함수를 실행하면 application객체가 return된다. 
            - `서버 그 자체의 객체`라고 생각하자!
        - Request객체
            - express서버에서 data를 서버에 줄 때 요청객체에다가 담아서 요청을 한다. 
            - req.params : url파라미터 정보 조회
            - req.query : 쿼리문 문자열 조회 
            - req.body : post요청 전용! => body에 담겨서 요청됨. 
        - Response객체 
            - http함수들로 요청이오면 전달해주는 역할
            - res.send() 
            - res.json()
            - res.status()
            - res.render()

        - 라우팅!! 
            - application으로도 라우팅을 구현할 수 있다. 
            - 하지만! 라우팅을 묶을 수 없다. 
            - Router()클래스를 제공한다. 
            - Router클래스를 이용하면 라우팅 조직을 만들 수 있다. 

## `express함수` 
- `정의` 
    - 노드js에서 `http모듈을 이용`하여 더 `간편하고 빠르게 웹 서버를 구축`하기 위한 `라이브러리`
    - express의 기능은 `application객체에 있으며` 그 객체를 `return`한다.

## `application객체`
- `정의`
    - express가 생성해주는 `서버 객체`
    - 그냥 이게 서버라고 생각하면 돼! 

- `메서드`
    - app.set(name, value)
        - 서버 설정을 위해 setting해주는 속성
    - app.get(name)
        - 설정을 위해 지정한 속성 꺼내옴
        - 미리 정해진 name들도 있다. 
            - `env` : `서버모드 설정`
            - `port` : `포트번호 지정`
            - `views` : `views폴더 위치 지정`
            - `view engine` : `뷰 엔진 설정`
    - app.use
        - 미들웨어 함수를 사용한다. 
    - app.http함수 
        - 함수에 맞는 라우팅 작업을 한다. 

## `express서버에서 사용하는 요청객체, 응답객체`
    - `express가 http요청(GET, POST, PUT, PATCH, DELETE)을     받게되면 res를 반환하게된다.`
    - app.get('/', (req,res) => ~~) 
        - get요청을 /로 받으면 res객체를 반환한다. 

- `request(클라이언트가 요청하는)객체` 
    - `req.params` : get요청으로 요청한 /:id등의 값을 확인한다. 
        - `/item/1`
        - `기본키로 상품을 구별해주고 싶을 때!`
        - `_id가 3번인 item`
    - `req.query` : get요청으로 요청한 요청 파라미터를 확인한다. 
        - `/user ? name = "지성"`
        - `category로 여러개의 특징을 지정했을 때!!`
    - `req.header` : header를 확인한다! 
        - `이건 잘 모르겠습니다..`

- `response(서버가 응답을 해주는)객체`
    - `res.send()`
        - response를 보내는 역할 
        - 서버에서 response를 보낼 때 기본적으로 `Content-Type을 지정`해줘야 한다.
        - `역할`
            - 프론트에서 보내는 data의 content-Type을 지정해준다. 
            - Buffer, String, Object, Array 4가지 type을 프론트에서 보낼 수 있다 .
            - Buffer라면 application/octet-stream으로 content-Type을 지정한다. 
    - `res.status()`
        - http상태 코드를 반환한다`(매우 많음)`.     
            - 404 : not found(url을 찾을 수 없음)
            - 403 : forbidden
            - 200 : ok
            - 
        - 이 뒤에 반드시 .end나 .send나 추가로 전송해야한다. 

    - `res.redirect()`
        - 페이지를 강제로 이동시킨다. 
    
    - `res.render()`
        - 뷰 엔진을 사용해 문서를 만든 후 전송한다. 
        - 주로 `ejs`를 사용한다. 

## `REST API`
    - URL을 좀 더 효율적으로 나타내는 구조! 
    - RESTFUL한 API를 사용해야한다. 
    - EXPRESS를 이용해서 REST API를 구현한다. 

## Client REST API 
    - GET : DB에 있는 자원들을 불러오다, 조회하다. 
    - POST : 생성하다.
    - PUT : 수정하다. 
    - DELETE : 삭제하다. 

## Server REST API 
    - client요청에 대한 서버의 응답은 두 부분으로 나뉜다.
    - Header부분(응답코드), body부분(json)
    - Header부분의 상태코드 (세 자리 정수 => 크게 3개)
        - 2XX(성공)
            - 201 : POST요청시 다 만들어졌으면 201반환
            - 204 : 서버에서 성공, 응답할 BODY가 없는경우
        - 4XX(클라이언트 요청 에러)
            - 401 : Unauthorized : 인증되지 않은 요청
            - 403 : Forbidden
            - 404 : Not Found : 서버에서 찾을 수 없음. 
            - 409 : Conflict : post요청했는데 이미 있어서 자원을 또 추가할 수 없는 경우. 
        - 5XX(서버 응답 에러)
            - 503 : Service Unvailable : 서버 점검. 
            - 504 : Gateway Timeout : 서버 게이트웨이 문제생김 
            - 505 : HTTP Version Not Supported : 해당 http버젼에서는 지원되지 않는 요청임을 알림. 