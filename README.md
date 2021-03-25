# CLONE YOUTUBE

## 공부를 하면서

요즘 피자집에서 일한지 5개월이 다 되어간다. 피자 커팅, 청소, 사이즈 챙기기, 주소보고 찾아가기를 몇천판 반복했더니 이젠 그냥 쓰윽 보고 몸이 기계처럼 반응한다. 정말 익숙해지지 않을 것 같았던 식료품 정리, 전화받기, 피자 박스 접기도 몸이 반응한다. (그 표현이 가장 어울린다.) 몇 천번의 반복, 안되면 실수를 복기한것의 결과다.
집에 오면서 문득 그런 생각이 들었다. 개발 공부도 잘 하는 부분만 매번 반복하고 안되는 부분은 왜 안되는지 복기가 전혀 없었다. 모르는 부분이 뭔지 왜 모르는지 이 부분은 왜 이렇게 작동하는지 조금 더 세밀하게 공부를 해야할 필요가 있음에도 시간을 많이 투자하지 않은 덕분이다. 아직 시간이 4개월 정도 남았다. 조금더 공부에 매진해서 원리를 잘 이해하고 기본기를 잘 닦아서 새로운 것을 배울 때 배우는 것에 익숙해지면 좋겠다.

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
