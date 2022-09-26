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

## fetch API
- fetch를 이용하여 item검색 기능을 만듦. 
- /items/:id 로 검색(`id는 req.params에 담긴다!`)

## front(media query)
- 프론트엔드는 `grid`레이아웃을 이용한 `반응형`제작
