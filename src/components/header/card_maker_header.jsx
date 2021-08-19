import React from "react";
import styles from "./card_maker_header.module.css";

const CardMakerHeader = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default CardMakerHeader;
