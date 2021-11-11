# TypeScript & React / Redux / Firebase를 이용한 명함만들기 프로젝트

- Front-End: TypeScript & React
- State Management: Redux-toolkit
- Back-End: Node js / Firebase / Cloudnary Storage

## Environment (설치언어 버전 및 사용스킬)

- front-end

  - TypeScript v 4.4
  - JavaScript ES6
  - HTML5 & CSS3
  - React v 17.0
  - Axios v 0.23
  - Redux-toolkit v 1.6

- back-end

  - Node js v 16.10
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

## 1. 내가 만든 프로젝트 분석(기능,코드,이미지)

## Project Name: Business Card Maker (명함만들기)

> 작성한 내용을 토대로 명함을 만들어주는 웹 프로젝트이다. 로그인 후 사용자의 연동된 정보를 통해 계정마다 저장된 명함을 볼 수 있다. Maker section을 통해 명함의 정보를 추가하거나 수정할 수 있으며, 이미지 등록이 가능하다. 또한, Preview section을 통해 완성된 명함을 볼 수 있다.

## 프로젝트 작동설명

1. firebase auth를 통한 google이나 github 계정을 통해 로그인한다.

   - login은 해당계정의 식별을 위해서 필요한것으로, 개인정보는 수집하지않는다.

2. login이 정상적으로 됐을 시, 왼쪽은 card의 정보를 입력하는 maker UI를, 왼쪽은 maker에서 입력된 정보를 카드로 출력해주는 preview UI를 보여준다. (react Router 사용)

3. maker / preview는 저장된 data를 전부 보여주는것이 아닌, 해당 계정에 로그인된 계정에 저장된 card만 보여주며, maker의 입력정보는 이름, 회사명, 배경색, 직급, 이메일, 자기소개, 사진을 입력한다. (파일업로드 시 로딩스피넛 기능 있음)

4. 저장된 정보는 delete 버튼을 눌러 삭제할 수 있으며, maker 최하단에는 새로 생성할 카드정보를 입력할 수 있다.

5. 최상단 오른쪽에 logout 버튼을 눌러 계정을 변경할 수 있다.

# Code Refactoring

![redux](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJBsnR%2FbtrkvJeN6JL%2F0AhOXGQQSulW9ECnvl6YQK%2Fimg.png)

[Redux 사진 출처](https://www.slideshare.net/binhqdgmail/006-react-redux-framework)

- Redux-Toolkit (state management library)

  - props 문법이 번거롭고, 하위 Component로 props를 보내야할게 많을때
  - state의 변경관리를 쉽게하기 위해
  - 찢어져 있는 props를 한 파일에 보관하여 관리가 용이하고 수정사항이 있을경우 한곳에서 수정하면 되니 유지보수성이 좋아진다.

  ```
  // redux 해당 코드를 붙여넣기
  ```

### Redux-saga, Redux-thunk, MboX 등 여러가지가 있지만 그중 Redux-Toolkit(이하 RTK)을 선택한 이유는??

- 리덕스에서 자주쓰는 기능들을 모두다 모아둔 라이브러리. thunk, saga, immer가 내장된 리덕스팀에서 공식적으로 만든 라이브러리.
- 규격화된 패턴과 변수명칭(?)이 존재하여 배우는 입장에서나 유지보수적인 측면에서 이해가 쉬워 선택하였다. MobX의 경우는 간단한 문법과 쉬운 사용법으로 쓰려고했으나 가독성을 위해 '@' 문구를 사용하는 decorator syntax를 지원하지만 글을 작성하고 있는 현재(21/11/11) 공식적으로 지원하고 있지 않기에 RTK처럼 패턴화가 되어있는 라이브러리를 선택했다.

## 2.필요한 스킬과 자료

- docs를 따로 만들때, 타입스크립트 type과 interface의 차이점을 구분하고 사용한 이유를 쓰기(드림코딩 한번 보고)

- 리덕스를 선택한 이유 제로초꺼 보고 정리해서 하기

- 마지막에 출처 제대로 남기기

- 각 구현한 곳에서 사용한 기술을 정리해서 만듦(Auth, realtimedatabase, image upload, react JSX Ele...etc)

## 3.내가 취업하고자 하는 기업에서 원하는 역량 분석
