# CLONE YOUTUBE

## 공부를 하면서

요즘 피자집에서 일한지 5개월이 다 되어간다. 피자 커팅, 청소, 사이즈 챙기기, 주소보고 찾아가기를 몇천판 반복했더니 이젠 그냥 쓰윽 보고 몸이 기계처럼 반응한다. 정말 익숙해지지 않을 것 같았던 식료품 정리, 전화받기, 피자 박스 접기도 몸이 반응한다. (그 표현이 가장 어울린다.) 몇 천번의 반복, 안되면 실수를 복기한것의 결과다.
집에 오면서 문득 그런 생각이 들었다. 개발 공부도 잘 하는 부분만 매번 반복하고 안되는 부분은 왜 안되는지 복기가 전혀 없었다. 모르는 부분이 뭔지 왜 모르는지 이 부분은 왜 이렇게 작동하는지 조금 더 세밀하게 공부를 해야할 필요가 있음에도 시간을 많이 투자하지 않은 덕분이다. 아직 시간이 4개월 정도 남았다. 조금더 공부에 매진해서 원리를 잘 이해하고 기반을 잘 다져서 새로운 것을 배울 때 배우는 것에 익숙해지면 좋겠다.

### 1. MVC

MODEL, VIEW, CONTROLLER의 약자이다. 따로 설치하거나 그런게 아니라 추상적인 개념이다.

    1) MODEL
       데이터를 어떻게 저장할 것인가.

    2) VIEW
       사용자에게 어떻게 보여줄 것인가.

    3) CONTROLLER
       웹 앱의 논리 구조는 어떻게 할 것인가.

### 2. Router

express에서는 express.Router()를 사용하여 웹 앱의 경로를 작은 단위로 쪼개서 설정이 가능하다. 이렇게 하면 각 경로의 성격에 따라 분리해서 관리가 가능하기 때문에 설계뿐만 아니라 유지보수도 편리해질수 있다.

### 3. 미들웨어

express 자체가 미들웨어라고 볼 수 있다고 말하는 사람들도 있다.

express를 통해 작업을 하다보면 보안, 파싱 등을 위한 미들웨어를 설치하게 된다.

- helmet은 보안을 위한 미들웨어다.
  [ExpressJS에 나와있는 Helmet 사용](https://expressjs.com/advanced/best-practice-security.html#use-helmet)

- body-parser
  Node.js body parsing middleware라고 소개되어있다.
  본문을 parsing하기위해 필요한 미들웨어다.
  [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)
  html에서 form에 입력된 값을 parsing할 수 있다.

- morgan
  HTTP request logger middleware for node.js라고 소개하고있다.
  여담(?)이지만 Dexter뒤에 morgan이라 명명된쇼는 한번 시작하면 완료될때까지 멈출수 없다.와 같은 유머스러운 글도... ㅎㅎㅎ
  [morgan](http://expressjs.com/en/resources/middleware/morgan.html)

- cookie-parser
  이건 읽어봐도 좀 이해가 잘 안되서, 쿠키 헤더를 구문 분석하고 쿠키 이름으로 키가 지정된 객체로 req.cookies를 채운다.라고 하는데... 그냥 쿠키 사용을 쉽게 할 수 있게 도와주는 미들웨어.
  [cookie-parser](http://expressjs.com/en/resources/middleware/cookie-parser.html)

middleWare는 expressJS에서 가장 중요한 개념이라고 한다.
res.locals를 사용해 데이터를 전송하거나
middle ware를 통해 사용자의 접근을 허용하거나 막는 역할도 할 수 있다.

### 4. 뷰 엔진

pug를 사용한다. pug는 html을 조금 더 직관적으로 이해할 수 있게 도와주며 if나 each를 통한 반복 작업을 할 수 있고 layout과 mixin, partial을 통해 html구문 작성시 반복을 피할 수 있도록 도와준다.

[express가 view engine을 이해하는 방법](http://expressjs.com/en/guide/using-template-engines.html)
[app.set](http://expressjs.com/en/api.html#app.set)

layout이나 partial, mixin을 사용하는 방법은 pug공식 문서를 보면된다.(혹은 다른 사람들의 블로그...)

### 5.pushAll

우연히 개발 블로그를 읽다가 [git add commit push 한 줄로 하기!](https://velog.io/@kihyeonkwon/%ED%95%9C-%EC%A4%84%EB%A1%9C-git-add-commit-push-%ED%95%98%EA%B8%B0)라는 글을 보게 되었다.
pushAll이라는 함수를 .zhsrc에 추가하여서 한줄로 깃에 버전 업을 하고 있다. 매우 편하다.

.zhsrc가 파일이 안열리는 경우가 있는데 (수정해야하는데...) sudo 명령어로도 열리지 않으면 이 글을 참고하자.  
[.zhsrc가 안열릴 때](https://developer-alle.tistory.com/326)

### 6.Model with mongoose

모델은 익숙치가 않다. 하지만 반복을 하다가 문서를 보면서 하나하나 모델을 작성하는 것에 익숙해지려고 이전에 만들때 그렇게 해봤다. 결과는 매우 긍정적이다.

db는 [monogoose 홈페이지](https://mongoosejs.com/docs/index.html)에서 Quick Start를 보면 설치부터 연결하는 방법까지 나와있다.

model은 Schema작성해야한다. shcema작성은 mongoose 웹페이지 Guide를 참고해서 작성하면된다.
Schema는 이름과 type, required, default를 작성해주어야하는데 type은 필수로 작성해야한다.
required는 반드시 해당 데이터가 값이 있어야할 때, 작성하고 default는 기본값을 어떻게 할 것인지를 작성한다.

마지막에 mongoose.model("modelName", schemaMongoose)로 model의 이름과 shcema의 이름을 넣어주어서 어떤 모델에 어떻게 저장할 것인지를 정리해주고 export해주면 사용할 수 있다.
