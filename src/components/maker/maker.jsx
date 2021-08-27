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
