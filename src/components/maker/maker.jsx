import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import CardMakerHeader from "../header/card_maker_header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, dbConnection }) => {
  const history = useHistory();
  /* 
  optional chaining 연산자 ?. 는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 
  연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다. ?. 연산자는 . 체이닝 연산자와 유사하게 작동하지만, 만약 참조가 nullish (en-US) (null 또는 undefined)이라면, 에러가 발생하는 것 대신에 표현식의 리턴 값은 undefined로 단락된다. 함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면, undefined를 리턴한다. 
  
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  */
  const historyState = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  //id change cards update
  useEffect(() => {
    if (!userId) return;

    const stopSync = dbConnection.syncCards(userId, cards => {
      setCards(cards);
    });
    return () => stopSync();
  }, [dbConnection, userId]);

  //login logic
  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) setUserId(user.uid);
      else history.push("/");
    });
    // authService.onAuthChange();
  }, [authService, history, userId]);

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });

    //TODO: data의 같음의 무결성체크가 없이 그냥 무조건 업데이트하구있음. 고민해볼것
    //firebase database new data set
    dbConnection.saveCard(userId, card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });

    //firebase database delete
    dbConnection.removeCard(userId, card);
  };

  const onLogout = () => {
    authService.logout();
  };

  return (
    <section className={styles.maker}>
      <CardMakerHeader onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;

// const [cards, setCards] = useState({
//   1: {
//     id: '1',
//     name: 'minwoo1111',
//     company: 'Samsung',
//     theme: 'light',
//     title: 'Software Engineer',
//     email: 'minwoo@gmail.com',
//     message: 'go for it',
//     fileName: 'ellie',
//     fileURL: null,
//   },
//   2: {
//     id: '2',
//     name: 'minwoo222',
//     company: 'Samsung',
//     theme: 'dark',
//     title: 'Software Engineer',
//     email: 'minwoo@gmail.com',
//     message: 'go for it',
//     fileName: 'ellie',
//     fileURL: null,
//   },
//   3: {
//     id: '3',
//     name: 'minwoo33',
//     company: 'Samsung',
//     theme: 'colorful',
//     title: 'Software Engineer',
//     email: 'minwoo@gmail.com',
//     message: 'go for it',
//     fileName: 'ellie',
//     fileURL: null,
//   },
// });
