import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import CardMakerHeader from "../header/card_maker_header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
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
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
