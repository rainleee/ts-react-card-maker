# firebase와 React를 이용한 명함만들기 프로젝트입니다!

## 사용 Skills

- front-end

  - javaScript
  - React 라이브러리
  - HTML & CSS
  - axios 비동기통신 라이브러리

- back-end

  - node js
  - yarn
  - firebase realtime database
  - firebase auth
  - cloudnary storage - image cloud storage

## 1.내가 만든 프로젝트 분석(기능,코드,이미지)

## Project: Business Card-maker (명함만들기)

1. firebase auth를 통한 google이나 github 계정을 통해 로그인한다.

   - login은 해당계정의 식별을 위해서 필요한것으로, 개인정보는 수집하지않는다.

2. login이 정상적으로 됐을 시, 왼쪽은 card의 정보를 입력하는 maker UI를, 왼쪽은 maker에서 입력된 정보를 카드로 출력해주는 preview UI를 보여준다. (react Router 사용)

3. maker / preview는 저장된 data를 전부 보여주는것이 아닌, 해당 계정에 로그인된 계정에 저장된 card만 보여주며, maker의 입력정보는 이름, 회사명, 배경색, 직급, 이메일, 자기소개, 사진을 입력한다. (파일업로드 시 로딩스피넛 기능 있음)

4. 저장된 정보는 delete 버튼을 눌러 삭제할 수 있으며, maker 최하단에는 새로 생성할 카드정보를 입력할 수 있다.

5. 최상단 오른쪽에 logout 버튼을 눌러 계정을 변경할 수 있다.(로컬스토리지,쿠키 같은거 사용 X..)

좀 더 나은 프로그램을 만들기위해 변경할 수 있는점

- 로컬스토리지,쿠키,세션을 이용한 정보저장.
- 백그라운드 색상 database에 저장 후 불러와 다양한 색상으로 표현?(3가지의 색만 고를게 아니라, 사용자가 직접 rgb값을 정하게끔 만들기)
- useMemo, useCallback을 활용하기
- state 관리 라이브러리 리덕스 사용
- TypeScript 사용하기
- function 문서정리
- ESLint 사용하기
- redux를 이용해서 상태관리하기

## 2.내가 취업하고자 하는 기업에서 원하는 역량 분석

## 3.필요한 스킬과 자료
