import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import CardMakerHeader from '../header/card_maker_header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'leeminwoo',
      company: 'kakao',
      theme: 'dark',
      title: 'developer1',
      email: 'rainlee4401@gmail.com',
      message: '안녕하세요 지금은 테스트중이랍니다',
      fileName: 'minwoo',
      fileURL: null,
    },
    {
      id: 2,
      name: 'leeminwoo2',
      company: 'kakao2',
      theme: 'light',
      title: 'developer2',
      email: 'rainlee4401@gmail.com',
      message: '안녕하세요 지금은 테스트중이랍니다',
      fileName: 'minwoo',
      fileURL: null,
    },
    {
      id: 3,
      name: 'leeminwoo3',
      company: 'kakao3',
      theme: 'colorful',
      title: 'develope3r',
      email: 'rainlee4401@gmail.com',
      message: '안녕하세요 지금은 테스트중이랍니다',
      fileName: 'minwoo',
      fileURL: null,
    },
  ]);

  const handleAddChange = card => {
    setCards([...cards, card]);
  };

  const history = useHistory();

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const onLogout = () => {
    authService.logout();
  };

  return (
    <section className={styles.maker}>
      <CardMakerHeader onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} onAddChange={handleAddChange} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
