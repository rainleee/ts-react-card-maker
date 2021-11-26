# Project Name: Business Card Maker.

- 최종버전 1.0 ver (2021/11/15)

- 작성한 내용을 토대로 명함을 만들어주는 웹 프로젝트이다. 로그인 후 사용자의 연동된 정보를 통해 계정마다 저장된 명함을 볼 수 있다. Maker section을 통해 명함의 정보를 추가하거나 수정할 수 있으며, 이미지 등록이 가능하다. 또한, Preview section을 통해 완성된 명함을 볼 수 있다.

- 이 홈페이지는 크롬 기준으로 개발되었으며, 다른 브라우저상에서 제대로 안나올 수 있습니다.

## Index

- Project Name: Business Card Maker

1. [프로젝트 설명](#1장-프로젝트설명)
   - [Environment](#environment)
   - [Prerequisite](#prerequisite)
2. [Code Refactoring](#2장-code-refactoring)
   1. [TypeScript](#2-1장-javascript에서-typeScript로-refactoring)
      - [Typescript로 Refactoring한 이유는?](#typescript로-refactoring한-이유)
      - [TypeScript 도입으로 인한 장점](#typeScript-도입으로-인한-장점)
      - [Refactoring Code](#실제-refactoring-된-typescript-code)
      - [interface와 type의 차이점](#interface와-type의-차이점)
   2. [Redux-Toolkit 도입](#2-2장-상태관리-lib-redux-toolkit-도입)
      - [Redux가 필요한 이유](#redux가-필요한-이유)
      - [Refactoring Code](#실제-refactoring-된-code)
3. [마무리하며](#3장-마무리하며)

## 1장 프로젝트설명

1. firebase auth를 통한 google이나 github 계정을 통해 로그인한다.

   - login은 해당 계정의 식별을 위해서 필요한 것으로, E-mail 정보만 수집한다.

2. login이 정상적으로 됐을 시, 왼쪽은 card의 정보를 입력하는 maker UI를, 왼쪽은 maker에서 입력된 정보를 카드로 출력해주는 preview UI를 보여준다. (react Router 사용)

3. maker / preview는 저장된 data를 전부 보여주는 것이 아닌, 해당 계정에 로그인된 계정에 저장된 card만 보여주며, maker의 입력정보는 이름, 회사명, 배경색, 직급, 이메일, 자기소개, 사진을 입력한다.

4. 저장된 정보는 delete 버튼을 눌러 삭제할 수 있으며, maker 최하단에는 새로 생성할 카드정보를 입력할 수 있다.

5. 최상단 오른쪽에 logout 버튼을 눌러 계정을 변경할 수 있다.

### 개발기간

- 2021.08 ~ 2021.11

## Environment

#### 설치언어 버전 및 사용스킬

- front-end

  - TypeScript v 4.4
  - JavaScript ES6
  - HTML5 & CSS3
  - React v 17.0
  - Axios v 0.23

- back-end

  - Node js v 16.10
  - NPM
  - Yarn
  - Firebase Realtime Database
  - Firebase Auth
  - Cloudnary Storage - image cloud storage

- State Management

  - Redux-toolkit v 1.6

## Prerequisite

- Firebase Auth API key
- Firebase realtime database API key
- cloudnary API key
- 노드환경파일 .env에 API key를 보관하였다. 각자의 환경에 맞춰서 API key를 공개하지 말고 구현할 것.

# 2장 Code Refactoring

## 2-1장 Javascript에서 TypeScript로 Refactoring

### Typescript로 Refactoring한 이유

- 아래 표를 보면서 두 언어의 차이점을 보자. 이러한 차이점과 객체지향언어의 장점으로 TypeScript로 리팩토링을 진행했다.

|      | Javascript                                                                                                                                                                                            | TypeScript                                                                                                                                                                                            |
| :--: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type | Dynamically type                                                                                                                                                                                      | Statically type                                                                                                                                                                                       |
| 특징 | 런타임환경 때 타입이 결정됨                                                                                                                                                                           | 컴파일러환경 때 타입이 결정 됨                                                                                                                                                                        |
| 장점 | 타입을 지정하지 않아 유연하게 프로그래밍 가능                                                                                                                                                         | - 변수를 선언할 때 타입을 명시해서 작성하므로 한번 결정된 타입은 절대 바뀔 수가 없음. 즉, 내가 코딩을 할 때 경고 메시지를 받아 볼 수가 있어서 조금 더 엄격하게 관리할 수 있다<br> - 객체지향언어이다. |
| 단점 | - 변수에 할당된 값을 토대로 타입이 동적으로 변하다 보니까 런타임 환경 전에는 에러메시지를 받지못해 디버깅에 취약함<br> - 프로젝트가 커질수록 동적으로 받는 변수가 의도치 않는 에러를 발생시킬 수 있음 | 코드를 짤 때 타입을 고려하고 설계해야 됨                                                                                                                                                              |

#### **TypeScript 도입으로 인한 장점**

- 타입의 도입으로 코드 가독성이 높아진다. (Ex)이 변수에는 어떤 데이터를 담고, 이 함수에는 어떤 인자 값을 받는지 한눈에 확인 가능)
- 사용자가 런타임 환경에서 에러를 발견하는 횟수보다, 컴파일단계에서 미리 디버깅해서 에러의 빈도수를 줄일 수 있다.
- 객체지향 프로그래밍(Object-Oriented Programming 이하 OOP)이 가능하다.

### OOP의 장점

![OOP 특징 4가지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCuDN3%2FbtrkHbBEHwZ%2F9TzDqYVW0968EWQ6LBFIY0%2Fimg.png)
[출처 드림코딩](https://www.youtube.com/watch?v=ZZib1YpxNdg&t)

- 캡슐화(Encapsulation)
- 추상화(Abstraction)
- 상속(Inheritance)
- 다형성(Polymorphism)

### 실제 Refactoring 된 Typescript code

> 아래는 리팩토링 된 일부 코드들이다. 얼핏 보면 type 및 interface를 정의하니 가독성이 더 떨어진 것 같지만 parameter가 어떤 타입을 받는지 정확히 명시하고 return 타입을 정확히 명시해 코드 가독성은 더 높아졌다. 해당 타입 이외에는 에러를 표시해줘 버그를 최소화하는 코드를 짤 수 있다.

- Javascript code

```javaScript
// auth_service.js class AuthService
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  logout() {
    return firebaseAuth.signOut();
  }
```

- Typescript code

```typeScript

  // type & interface define
  type AuthChangeUserFn = (user: FirebaseUser) => void;
  type LoginProvider = typeof googleProvider | typeof githubProvider;
  interface FirebaseAuthService {
    login(providerName: string): UserCredential;
    onAuthChange(onUserChanged: Function): void;
    logout(): Promise<void>;
    getProvider(providerName: string): LoginProvider;
  }

  // auth_service.ts class AuthService
  login(providerName: string): UserCredential {
      const authProvider = this.getProvider(providerName);
      return firebaseAuth.signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged: AuthChangeUserFn) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  logout(): Promise<void> {
    return firebaseAuth.signOut();
  }

```

### interface와 type의 차이점

- Typescript에서 interface와 type은 같은 용도로 쓰이는 것으로 보인다. 그렇다면 두 가지를 쓰는 기준은 무엇일까?

|                                     interface                                     |                                       type                                       |
| :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| 어떤 특정한 규격을 정의하고,<br>그 규격을 통해서 구현할 것이 필수적으로 필요할 때 | 어떠한 데이터를 담을 때,<br>어떠한 데이터를 담을 수 있을지 데이터 타입을 정할 때 |

```typeScript
  // data type define
  type AuthChangeUserFn = (user: FirebaseUser) => void;
  type LoginProvider = typeof googleProvider | typeof githubProvider;
```

위의 코드를 본다면 타입은 해당 데이터가 어떤 타입인지 명시했을 뿐이며,

```typeScript
  interface FirebaseAuthService {
    login(providerName: string): UserCredential;
    onAuthChange(onUserChanged: Function): void;
    logout(): Promise<void>;
    getProvider(providerName: string): LoginProvider;
  }

  // interface implements
  class AuthService implements FirebaseAuthService {}
```

interface는 구현을 위해 모아둔 변수 및 method의 집합으로 class implements를 통해 구현한 것을 확인할 수 있다.

<br>
<br>

## 2-2장 상태관리 lib Redux Toolkit 도입

![redux](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJBsnR%2FbtrkvJeN6JL%2F0AhOXGQQSulW9ECnvl6YQK%2Fimg.png)

[Redux 사진 출처](https://www.slideshare.net/binhqdgmail/006-react-redux-framework)

### Redux가 필요한 이유

- props 문법이 번거롭고, 하위 Component로 props를 보내야 할게 많을 때
- state의 변경관리를 쉽게 하기 위해
- 찢어져 있는 props를 한 파일에 보관하여 관리가 쉽고 수정사항이 있으면 한곳에서 수정하면 되니 유지 보수성이 좋아진다.

#### **Redux-saga,-Redux-thunk,MboX 등 여러가지가 있지만 그 중 Redux-Toolkit(이하 RTK)을 선택한 이유**

- 리덕스에서 자주 쓰는 기능들을 모두 다 모아둔 라이브러리. Thunk, Saga, Immer가 내장된 리덕스팀에서 공식적으로 만든 라이브러리.
- 규격화된 패턴과 변수명칭(?)이 존재하여 배우는 입장에서나 유지 보수적인 측면에서 이해가 쉬워 선택하였다. MobX의 경우는 간단한 문법과 쉬운 사용법으로 쓰려고 했으나 가독성을 위해 '@' 문구를 사용하는 decorator syntax를 지원하지만, 글을 작성하고 있는 현재(21/11/11) 공식적으로 지원하고 있지 않기에 언제 문법이 변할지 몰라 RTK처럼 패턴화가 되어있는 라이브러리를 선택했다.
  <br>
  <br>

  정리된 사항은 [rainlee 티스토리](https://rainlee-develop-well.tistory.com/37)에서도 확인가능하다.

### 실제 Refactoring 된 code

- 아래 코드는 해당 프로젝트 maker.tsx file return type 코드들이다. 하위 Component에 props를 넘기고, 해당 props를 다시 maker.tsx 상위로 불러와 function을 실행하여 작업을 수행하는 형식으로 이루어져 있다.

```javascript
// before redux maker.jsx
// addCard, updateCard, deleteCard props func
const createOrUpdateCard = card => {
  setCards(cards => {
    const updated = { ...cards };
    updated[card.id] = card;
    return updated;
  });
};

const deleteCard = card => {
  setCards(cards => {
    const updated = { ...cards };
    delete updated[card.id];
    return updated;
  });
};

// before redux maker.jsx return
return (
  <section className={styles.maker}>
    <CardMakerHeader onLogout={onLogout} />
    <div className={styles.container}>
      {/*props 전달*/}
      <Editor
        cards={cards}
        addCard={createOrUpdateCard}
        updateCard={createOrUpdateCard}
        deleteCard={deleteCard}
        FileInput={FileInput}
      />
      {/*props 전달*/}
      <Preview cards={cards} />
    </div>
    <Footer />
  </section>
);
```

- 위 function은 redux 도입 전 props로 넘긴 함수들을 실행하는 함수들이다. 유지보수에 쉽게 function을 한곳에 만들어 props를 넘긴 후 실제로 사용하는 JSX Element에서 event를 줘서 maker.jsx에서 최종 함수가 실행되게 만들었다.<br>
  하지만 후에 만든 사람이 아니거나, 오랜 시간이 지난 후에 코드를 수정하거나, 버그를 발견해 디버깅할 일이 있다면 maker.jsx로 해당 함수를 찾기 위해 아래 JSX부터 코드를 이해하며 와야 할 것이다. 아래는 redux 도입 후 코드들이다.

```javascript
//@reduxjs/toolkit cardSlice.ts createSlice()
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    //sync reducers
    setCards(state, action) {
      Object.keys(action.payload).map(
        key => (state[key] = action.payload[key])
      );
    },

    addOrUpdateCard(state, action) {
      state[action.payload.id] = action.payload;
    },

    deleteCard(state, action) {
      delete state[action.payload.id];
    },
  },
});

// after redux maker.tsx return
return (
  <section className={styles.maker}>
    <CardMakerHeader onLogout={onLogout} />
    <div className={styles.container}>
      <Editor dbConnection={dbConnection} FileInput={FileInput} />
      <Preview />
    </div>
    <Footer />
  </section>
);
```

- event를 실행하는 화면에서 dispatch()로 RTK의 slice()를 이용해서 한 파일에 모아둬 유지 보수성을 높였고, 불변성때문에 ...을 사용해 객체리터럴을 반복적으로 사용해 코드가 길어졌는데, RTK에 내장된 immer를 사용해 코드량을 줄여 반복적인 코드 제거 및 가독성을 높였다. 같은 파일에서 얼마나 props를 넘기는 양이 달라졌는지 아래 JSX Element를 통해 보도록 하자. Editor에 넘기는 props가 다섯 줄에서 한 줄이 된 것을 볼 수 있다.

```javascript
// before redux maker.jsx return
  (<Editor
    cards={cards}
    addCard={createOrUpdateCard}
    updateCard={createOrUpdateCard}
    deleteCard={deleteCard}
    FileInput={FileInput}
  />
  <Preview cards={cards} />)

// after redux maker.tsx return
  (<Editor dbConnection={dbConnection} FileInput={FileInput} />
  <Preview />)
);
```

## 3장 마무리하며

아직 이 프로젝트는 바꾸고 싶은 점이 너무 많아 마무리라는 말이 맞을까 싶다. 하지만 일정 기능을 완성한 지금, 프로젝트를 진행한 소감을 적어두려 한다. 가장 기억에 남는 것은 리팩토링이다. 리팩토링을 진행하면서 직접 내가 사용할 언어나 라이브러리를 조사하고 찾아볼 때 재미와 희열을 느꼈다.<br> 리팩토링을 하지 않았어도 별 문제 없이 프로그램이 돌아갔다. 하지만 내 스스로 조금 더 견고한 코드를 만들기 위해 고민하여 새로운 것을 배우고 이를 바탕으로 좀 더 깔끔하게 작동하는 코드들을 보니 만족감과 희열이 찾아왔다. 하지만 진행할수록 내가 얼마나 부족한지도 깨닫게 되었는데, 이 세상엔 내가 모르는 편리하고 좋은 코드들이 많은 것 같다. 이러한 지식을 꾸준히 습득하여 더욱더 성장하는 개발자가 되고 싶다. 이 프로젝트도 아직 끝난 것이 아니다. 더욱더 기능을 추가하고 그 기능들을 문서로도 남겨두도록 하겠다.
