import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import CardMakerHeader from "../header/card_maker_header";
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
      <h1>Maker</h1>
      <Footer />
    </section>
  );
};

export default Maker;
