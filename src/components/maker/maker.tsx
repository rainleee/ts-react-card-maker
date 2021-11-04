import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseUser } from '../../service/firebase';
import { InitProps } from '../../store/common';
import {
  CardMetaData,
  StateHistory,
  UserPersonalCards,
} from '../../store/models';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import CardMakerHeader from '../header/card_maker_header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { useDispatch } from 'react-redux';
import { cardSlice } from '../../store/reducers/cardSlice';

function Maker({ FileInput, authService, dbConnection }: InitProps) {
  const history = useHistory<History>();
  const dispatch = useDispatch();
  /* 
  optional chaining 연산자 ?. 는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 
  연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다. ?. 연산자는 . 체이닝 연산자와 유사하게 작동하지만, 만약 참조가 nullish (en-US) (null 또는 undefined)이라면, 에러가 발생하는 것 대신에 표현식의 리턴 값은 undefined로 단락된다. 함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면, undefined를 리턴한다. 
  
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  */

  const historyState = history?.location?.state;
  const [cards, setCards] = useState<UserPersonalCards>({});
  const [userId, setUserId] = useState<string>(
    historyState && (historyState as StateHistory).id
  );

  //id change cards update
  useEffect(() => {
    if (!userId) return;

    const stopSync = dbConnection.syncCards(userId, cards => {
      setCards(cards);
      dispatch(cardSlice.actions.setCards(cards));
    });
    return () => stopSync();
  }, [dbConnection, userId, dispatch]);

  //login logic
  useEffect(() => {
    authService.onAuthChange((user: FirebaseUser) => {
      if (user) setUserId(user.uid);
      else history.push('/');
    });
  }, [authService, history, userId]);

  /**
   * card infomation create or update
   *
   * 신규카드가 만들어질 경우는 카드를 추가하고, 기존카드(id가 존재하는경우)일 경우 상태를 업데이트한다
   */
  const createOrUpdateCard = (card: CardMetaData) => {
    setCards((cards: UserPersonalCards) => {
      const updated: UserPersonalCards = { ...cards };
      updated[card.id] = card;
      return updated;
    });

    //firebase database new data set
    dbConnection.saveCard(userId, card);
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
          dbConnection={dbConnection}
          FileInput={FileInput}
          updateCard={createOrUpdateCard}
        />
        <Preview />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;

/**
 * TODO: 나중에 포폴 문서에 남길것.
 *  타입스크립트를 쓰는 이유
    const [cards, setCards] = useState<UserPersonalCards>({ id: { id: '' } });
  const [userId, setUserId] = useState<string>(
    historyState && (historyState as StateHistory).id
  );
  기존에는 useState를 제네릭없이 하거나 {}, null을 이용해 포괄적인 타입을 담아 any타입을 선언한것과 다름없었다.

  위에 코드에서 UserPersonalCards는 CardMetaData를 묶어놓은 객체타입인데, 

  onst stopSync = dbConnection.syncCards(
      userId,
      /// *** (cards: UserPersonalCards) => {
        setCards(cards);
      }
    );

    위 코드 중 ***인곳에 cards들을 선언해 놓고 아무거나 담을 수 있었다. 결국엔 넣을값과 선언한 타입이 일치해야 에러가 안나는데 
    내가 card's'를 card로 착각해서 다른 CardMetaData 타입을 선언해 놨는데 아무문제 되지않았다. 그래서 초기화 할때도 객체타입을
    정확히 명시해두면 코드를짤때 해당객체 규격안에서 해야하므로 참 중요하게 배운 사건이다. 
*/
