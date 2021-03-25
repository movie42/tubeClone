# CLONE YOUTUBE

## 배운거 정리하는 노트

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

helmet은 보안을 위한 미들웨어다.
[ExpressJS에 나와있는 Helmet 사용](https://expressjs.com/advanced/best-practice-security.html#use-helmet)
