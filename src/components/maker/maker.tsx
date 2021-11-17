import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseUser } from '../../service/firebase';
import { InitProps } from '../../store/common';
import { StateHistory } from '../../store/models';
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
  const [userId, setUserId] = useState<string>(
    historyState && (historyState as StateHistory).id
  );

  //id change cards update
  useEffect(() => {
    if (!userId) return;

    const stopSync = dbConnection.syncCards(userId, cards => {
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
   * login user logout
   */
  const onLogout = () => {
    authService.logout();
  };

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
}

export default Maker;
