import React from "react";
import styles from "./card_maker_header.module.css";

const CardMakerHeader = () => {
  return (
    <section className={styles.container}>
      <img src="public/favicon.ico" alt="card-image" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </section>
  );
};

export default CardMakerHeader;
