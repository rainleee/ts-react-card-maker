# firebase와 React를 이용한 명함만들기 프로젝트입니다

## Environment (설치언어 버전 및 사용스킬)

- front-end

  - TypeScript v 4.4
  - JavaScript ES6
  - HTML5 & CSS3
  - React v 17.0
  - Axios v 0.23
  - Redux-toolkit v 1.6

- back-end

  - node js v 16.10
  - NPM
  - yarn
  - Firebase Realtime Database
  - Firebase Auth
  - Cloudnary Storage - image cloud storage

## Prerequisite (전제조건)

- Firebase Auth API key
- Firebase realtime database API key
- cloudnary API key
- 노드환경파일 .env에 API key를 보관하였다. 각자의 환경에 맞춰서 API key를 공개하지말고 구현할것.

## 1.내가 만든 프로젝트 분석(기능,코드,이미지)

## Project Name: Business Card Maker (명함만들기)

> 작성한 내용을 토대로 명함을 만들어주는 웹 프로젝트이다. 로그인 후 사용자의 연동된 정보를 통해 계정마다 저장된 명함을 볼 수 있다. Maker section을 통해 명함의 정보를 추가하거나 수정할 수 있으며, 이미지 등록이 가능하다. 또한, Preview section을 통해 완성된 명함을 볼 수 있다.

### workflow

1. firebase auth를 통한 google이나 github 계정을 통해 로그인한다.

   - login은 해당계정의 식별을 위해서 필요한것으로, 개인정보는 수집하지않는다.

2. login이 정상적으로 됐을 시, 왼쪽은 card의 정보를 입력하는 maker UI를, 왼쪽은 maker에서 입력된 정보를 카드로 출력해주는 preview UI를 보여준다. (react Router 사용)

3. maker / preview는 저장된 data를 전부 보여주는것이 아닌, 해당 계정에 로그인된 계정에 저장된 card만 보여주며, maker의 입력정보는 이름, 회사명, 배경색, 직급, 이메일, 자기소개, 사진을 입력한다. (파일업로드 시 로딩스피넛 기능 있음)

4. 저장된 정보는 delete 버튼을 눌러 삭제할 수 있으며, maker 최하단에는 새로 생성할 카드정보를 입력할 수 있다.

5. 최상단 오른쪽에 logout 버튼을 눌러 계정을 변경할 수 있다.

## 2.필요한 스킬과 자료

- 각 구현한 곳에서 사용한 기술을 정리해서 만듦(Auth, realtimedatabase, image upload, react JSX Ele...etc)

- redux, 타입스크립트 대입전 코드와 대입 후 코드를 비교분석하고 왜 넣었는지에 대해 설명할것.

## 3.내가 취업하고자 하는 기업에서 원하는 역량 분석
