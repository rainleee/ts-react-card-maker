import React from "react";
import styles from "./card_maker_header.module.css";

const CardMakerHeader = ({ loginState }) => {
  return (
    <header className={styles.header}>
      {!loginState && (
        <div className={styles.logout__container}>
          <button className={styles.logout__btn}>Logout</button>
        </div>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default CardMakerHeader;
