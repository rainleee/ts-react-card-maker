import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import CardMakerHeader from "../header/card_maker_header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "leeminwoo",
      company: "kakao",
      backgroundColor: "black",
      rank: "developer1",
      email: "rainlee4401@gmail.com",
      comment: "안녕하세요 지금은 테스트중이랍니다",
    },
    {
      id: "2",
      name: "leeminwoo2",
      company: "kakao2",
      backgroundColor: "red",
      rank: "developer2",
      email: "rainlee4401@gmail.com",
      comment: "안녕하세요 지금은 테스트중이랍니다",
    },
    {
      id: "3",
      name: "leeminwoo3",
      company: "kakao3",
      backgroundColor: "green",
      rank: "develope3r",
      email: "rainlee4401@gmail.com",
      comment: "안녕하세요 지금은 테스트중이랍니다",
    },
  ]);

  const history = useHistory();

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push("/");
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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
