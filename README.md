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

### 7. multer

비디오 파일을(어떤 파일이든지) 업로드할때 DB에 업로드를 하는건 좋지 않은 방법이다.
그래서 fileUrl을 storage에서 불러와서 띄어주는데 multer를 이용하면 file path를 추적해서 video를 불러올 수 있다.
나중에 아마존 storage에 연결할 때, 아마 변경되는 것 같은데... 일단 지금은 이렇게...

### 8. cookie, session 그리고 Authentication

- [cookie - HTTP cookie, mozilla](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
  사용자는 Frontend(View)를 통해 Server(Node App)에 요청(request)을 보낸다. 로그인 페이지를 예로 들면 로그인 req를 보낸다. 그러면 브라우저는 그 데이터 조각을 저장해 놓았다가 동일한 서버에 재 요청 시 저장된 데이터를 함께 전송한다. 예를 들면 로그인 이후에 새로고침을 한다던가... 그 저장 공간이 쿠키다. (제대로 이해한거 맞나?)
  서버에서 사용자 브라우저에 쿠키를 전송하기 위해서 response header를 설정하게 되고 유저가 프론트 앤드에서 요청값을 보낼때마다 쿠키를 참조하여 같은 브라우저에서 재 요청을 보내는지 확인한다.
  쿠키는 Client-side에 저장되는 것이다. 따라서 쿠키의 value는 브라우저에서 조작이 가능해진다.

- session
  세션은 server-side에 저장되고 세션의 키 값만 클라이언트 쪽에 저장한다. 브라우저는 필요할 때, 이 키값을 이용하여 서버에 저장된 데이터를 사용하게 된다.
  세션의 수명은 브라우저를 통해 웹서버에 접속한 순간부터 웹 브라우져를 종료하여 연결을 끊는 시점까지다.
  세션은 보안에 취약한 쿠키를 보완해주는 역할을 한다.

[쿠키와 세션의 차이](https://hahahoho5915.tistory.com/32)

Authentication은 passport를 설치하여 passport로 진행하려고 한다.(passport없이 authentication 코드를 작성하는건 일단 동작이 어떻게 되는지 전체적으로 이해를 한 상태에서 하나씩 뜯어봐야 조금 덜 지루하게 공부 할 수 있을 것 같다. )

### 8-1. serialization & deserialization

serialization : 쿠키가 어떤 정보를 가질 수 있는가.
어떤 feild가 쿠키에 담길 것인지 알려준다.
쿠키에는 너무 많은 정보를 담게 되면 안된다.(아마 보안문제때문에 그런것 같다.)

deserialization : 어느 사용자인지 어떻게 찾는가? 즉 해당 쿠키의 정보를 어떻게 사용자로 전환할 수 있는지 알려준다.

### 8-2. express-session && connect-mongo

express session을 설치하여서 session key를 저장하였다. sotre 설정을 통해서 서버가 재시작되더라도 session키를 알수 있도록 하기 위해서 connect-mongo를 설치하여 session을 서버 사이드에 저장할 수 있도록 설정했다.

### 8-3. 로컬 로그인을 passportJS를 통해 한번 다 만들어 보면서

passport를 통해 serialization, deserialization을 설정하고 가입과 동시에 authenticatie을 passport가 하도록 controller를 작성했다. 아직 일련의 과정을 완전하게 이해한 것은 아니지만 passport가 serialize를 하는 과정에서 쿠키를 생성하고 express-session을 통해서 session을 생성하도록 한다. session은 서버 사이드에 저장되어 새로고침을 하거나 서버를 재시작하더라고 기억하고 있도록 한다.

만약 이 모든 과정을 vanilla nodejs로 만든다면 어떻게 될까? 꽤나 복잡한 과정을 거치게 될 것이다. 하지만 저레벨 수준에서 어떤 일이 일어나고 있는지 아직 이해가 안된다. 이 부분은 공부한 다음에 보충해보고싶다.

### 8-4 session과 cookie를 passport없이 하기

생각보다 매우 간단하다. req값을 조회하면 session값이 있는 것을 알 수 있다. 로그인을 할 때, req.session값에 object값으로 user정보와 logging이 된 유저인지를 확인하는 값을 내가 저장하면 session값에 user가 로그인을 했는지 안했는지는 알 수 있다. 그러나 session은 저장되지 않는다. 이 문제를 해결하기 위해서는 mongostore를 이용해서 session값을 db에 저장한다. 어차피 브라우저에 있는 key값과 db에 있는 key값을 비교해서 사용자가 로그인한 사용자인지 아닌지를 알고 있기 때문에 db를 이용해서 로그인을 계속 유지할 수 있다. session만료는 기본적으로 14일이지만 내가 커스텀을 해서 조절할 수 있다.

github login도 passport를 쓰지 않고 할 수 있다.

1. github에서 제공하는 authentication url로 접근하게 한다.
2. github에서 받은 client key와 secrect key 그리고 authentication url에 접근한 다음 github에 로그인 한 뒤에 나의 정보에 접근하는 것을 허용하면 param값에 주어지는 key값이 있는데 이 세가지를 이용해서 github 로그인을 허용하게한다.
3. db에 github로그인을 했을 때, 사용자 정보를 저장한다.

### 8-4. github login

passport strategies를 사용하여 socail login을 만들어보았다. 나는 보니까 passport-github2가 있어서 그것을 사용하였다. 문서를 보고 차근 차근 따라하면 되고 github에서 내가 현재 사용하고 있는 url을 OAuth에 등록하면 된다.

보고 있는 강의에서 뭔가 controller에 모든 것을 변수로 선언해서 예시에 있는 부분을 전부 다 바꿔서 좀 복잡해보이지만 유지보수를 생각하면 변수로 선언해서 집어 넣으면 어떤 부분이 오류가 생긴건지 조금 더 빠르게 찾을 수 있어서 편리하다.

다음은 KAKAO LOGIN을 사용해봐야겠다. facebook login은 https가 아니면 너무 복잡해서 그냥 생략하고 kakao, naver를 사용해봐야겠다.

### 9. WEBPACK

웹팩은 module bundler이다. sass나 es6같은 파일을 브라우저가 읽을 수 있도록 호환되는 파일로 변환해준다.

웹펙은 엔트리와 아웃풋을 가지고 있다.
엔트리 : 변환할 파일이 어느 경로로부터 오는가.
아웃풋 : 변환한 파일을 어디에 저장할 것인가.

### 10. CSP에 대하여

거의 이틀동안 뻘짓을 했다. webpack으로 클라이언트 코드를 변환한다음에 실행을 시키려고 하면 계속 에러가 떴다.

```
  main.js:19 Uncaught EvalError: Refused to evaluate a string as JavaScript because ‘unsafe-eval’ is not an allowed source of script in the following Content Security Policy directive: “script-src ‘self’“.
```

많은 방법을 시도해보았다.

Header를 nodejs로 변경하기(실패)
csp-html-webpack-plugin 설치하기(실패)
webpack페이지 뒤져서 metadata바꿔보기(실패)
구글 CSP정책에 대한 글 쭉 읽고 metadata바꿔보기(실패)
stackoverflow뒤져서 하라는대로 해보기(실패 - 게다가 이건 위의 방법들과 동일)

그러다가... helmet()을 우연치 않게 보게 되었고 helmet설정을 다음과 같이 해야한다는 것을 깨닫게 되었다.

```javascript
app.use(helmet({ contentSecurityPolicy: false }));
```

이거 한줄로 모든 게임은 끝났다. 왜 이걸 안넣었을까? 바보...

참고로 바꿔도 안되는 이유를 찾아봤더니 크롬이 저장하고 있는 캐쉬때문이었다. 네트워크를 아무리 지워도 이전에 적용한 것을 계속 요청해서 전부 지웠더니 새로운 요청값이 담긴 것을 get하였다.

어쨌든 드디어 해결했다. console.log("hi")가 동작하더라...

## ERRORS!!!

### 11-1. apple 실리콘

apple 실리콘이 탑제된 노트북을 샀다. 그리고 node js v16을 설치했다. 그리고 재앙이 시작되었다. 6시간 반동안 gyp error에 모든것을 다 쏟아 붓다가 rebuild를 하면서 error메시지를 읽는 도중 해결 방법이 잘못된것같다는 생각이 들었다. 에러 메시지를 추적하다 nvm까지 오게 되었고 nvm을 설치한 뒤에서야 나는 npm install 오류가 나는지 알게되었다. 지금까지 설치한 npm 패키지는 node v15.14.0에서 설치한 것들이었다. 그래서 v16에서 설치가 안된것이었다. 이걸 어떻게 감으로 알게 됐냐면 새로운 폴더를 만들어서 v16에서 npm install express를 실행했더니 너무 에러 없이 잘되길래 아... 이거 좀 뭔가 이상한데?라는 느낌이 스쳤다고 해야할까? 어쩄든... 설치 됐다. 그래서 npm start를 누르는 순간 에러가 한무더기... 또 왜그러나 했더니 .env파일은 github에 올리지 않기 때문에 보안코드를 불러오지 못하는데서부터 오류가 발생했다. 아직도 넘어야할 산이 너무 많다. mongodb community도 설치해야하고 .env설정도 해야하고.. 어휴... 오늘은 그만 자자...;

### 11-2. node-sass 실행 에러문제

webpack assets을 컴파일링 하는 과정에서 "Node Sass does not yet support your current environment: OS X Unsupported architecture (arm64) with Unsupported runtime (93)"라고 에러메시지가 떴다. 뭐지 전에는 잘 됐었는데 하다가... 에러메시지를 읽어보니까 아직 M1을 지원하지 않는 것같다. nvm으로 버전을 살펴보니까 v16.0.0에서 아직 실행이 안되는 것 같다. nvm에서 node 버전을 v14로 낮춰서 node-sass를 다시 설치한다음 webpack을 다시 빌드 시켰다. 그랬더니 에러가 사라졌다.

"에플 실리콘을 지원하기 위해서 오늘도 수고하시는 개발자들께 감사드립니다."

이제 view작업 해야겠다.

### 11-3. 철자 오류

나는 그 어떤 오류보다 이게 더 무섭다. 왜냐하면 분명 정확하게 입력했다고 생각할 떄가 많아서 왜 오류가 나는지 한참을 찾다가 보면 req를 rreq라고 썼거나 route라고 쓰는 등의 실수를 했기 떄문이다. 결국 결과가 무엇이냐고? 오늘 video 삭제가 분명 되어야하는데 계속 되지 않아서 거의 4시간을 view, controller, router를 헤매다가... req를 routes로 잘못 썼다는 것을 알게 되었다.
아... 나는 내가 지금까지 배운것을 이해를 잘 못하고 있는 줄 알고 강의 2배속으로 전부 다 돌려보고... 쌩 난리를 쳤는데... 겨우 철자가 틀린거라니... 이 에러가 나는 가장 무섭다.

### 12. code refactoring

인터넷 서칭 혹은 강의를 들으면서 코드를 더 직관적으로 알아보기 쉽게 작성하는 방법을 알때마다 새로 작성하고 이곳에 하나씩 업데이트를 할 예정이다.

#### 12-1. Router route().get().post()

처음 express를 배울때 코드를 이렇게 작성했다.

```[javascript]

globalRouter.get("/login", getLogin)
globalRouter.post("/login", postLogin)

```

그런데 이렇게 작성하는게 더 직관적이라 전부 다시 바꿨다.

```[javascript]

globalRouter.route('/login').get(getLogin).post(postLogin)

```

반복을 조금 더 줄이고 조금 더 직관적이게 볼 수 있다.

### 12-2. all()

로그인 된 사용자와 그렇지 않은 사용자를 우회하도록 할 때 미들웨어를 이용할 수 있다. 미들웨어로 만든 함수는 controller에서 사용할 수 있는데 그럴때 all을 쓰면 편리하게 설정할 수 있다.
golbalRouter.router('/').all(private).get(getHome).post(postHome)

### 12-3. status()

비밀번호 설정 오류나 기타 다른 오류를 설정한 다음에 보통 return 문으로 redriect를 하는데 status코드를 사용하여 해당 명령의 상태가 bad request인지 아닌지를 판별 해주는 것이 좋다.

```[javascript]
try{
  ...
}catch(error){
  return res.status(400).redirect('/');
}
```

status코드를 사용하면 해당 request값을 브라우저가 선택적으로 저장하거나 버린다.

### 12-4. populate('ref')

mongoose에서 데이터베이스를 서로 관계하도록 설정하면 populate를 사용하여 데이터를 쉽게 불러올 수 있다. 예를 들어 video를 만들 때, user id값을 저장하도록 명령하면 video 데이터 베이스의 사용자 id 정보를 나중에 불러올 수 있는데, 그 값을 가지고 video의 세부 정보를 불러오거나 현재 세션에 저장된 user와 video를 생성한 user가 같은지 비교하여 수정, 삭제 권한을 설정하는 것이 가능하다.
