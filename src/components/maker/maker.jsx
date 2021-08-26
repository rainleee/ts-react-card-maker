import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import CardMakerHeader from '../header/card_maker_header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'minwoo1111',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'minwoo@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'minwoo222',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'minwoo@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'minwoo33',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'minwoo@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
  });

  const history = useHistory();

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  /* 
  **[]로 card를 정의한것에서 {}로 변경한 이유**
  현재 토이프로젝트에서는 기껏해야 5~10개가 되는 명함을 만들기 때문에
  array에 있는 정보를 map이나 for loop로 찾아도 데이터량이 적어서 문제가 되지않지만,
  큰 데이터를 담는 경우(1000,10000 ... etc)의 값이 담겨있다면 일일히 loop를 돌아서
  검색효율이 떨어질 것이다. 그것을 대비해 obj의 key만 따로 분류하여 찾는다면 데이터처리효율이
  더 좋아져서 처리속도가 올라 갈 것이다. 늘 생각해서 더 나은 코드를 만들기 위해서 할것.
  state를 업데이틀하려면 기존에 있는것을 건드리지말고 꼭 복사본을 만들어서 변경할것!!!
   */
  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    console.log('card');
    console.log(card);
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
