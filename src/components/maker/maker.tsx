import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseUser } from '../../service/firebase';
import { AppProps } from '../../store/common';
import {
  CardMetaData,
  StateHistory,
  UpdatedOrDeletedCard,
} from '../../store/models';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import CardMakerHeader from '../header/card_maker_header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, dbConnection }: AppProps) => {
  const history = useHistory<History>();

  /* 
  optional chaining 연산자 ?. 는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 
  연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다. ?. 연산자는 . 체이닝 연산자와 유사하게 작동하지만, 만약 참조가 nullish (en-US) (null 또는 undefined)이라면, 에러가 발생하는 것 대신에 표현식의 리턴 값은 undefined로 단락된다. 함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면, undefined를 리턴한다. 
  
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  */
  const historyState = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState<string>(
    historyState && (historyState as StateHistory).id
  );

  //id change cards update
  useEffect(() => {
    if (!userId) return;

    const stopSync = dbConnection.syncCards(userId, (cards: CardMetaData) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [dbConnection, userId]);

  //login logic
  useEffect(() => {
    authService.onAuthChange((user: FirebaseUser) => {
      if (user) setUserId(user.uid);
      else history.push('/');
    });
  }, [authService, history, userId]);

  /**
   * card infomation create or update
   * 신규카드가 만들어질 경우는 카드를 추가하고, 기존카드(id가 존재하는경우)일 경우 상태를 업데이트한다
   */
  const createOrUpdateCard = (card: CardMetaData) => {
    setCards(cards => {
      const updated: UpdatedOrDeletedCard = { ...cards };
      updated[card.id] = card;
      return updated;
    });

    //firebase database new data set
    dbConnection.saveCard(userId, card);
  };

  /**
   * card infomation delete
   */
  const deleteCard = (card: CardMetaData) => {
    setCards(cards => {
      const updated: UpdatedOrDeletedCard = { ...cards };
      delete updated[card.id];
      return updated;
    });

    //firebase database delete
    dbConnection.removeCard(userId, card);
  };

  /**
   * login user logout
   */
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
