# all-of-nodeJS

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