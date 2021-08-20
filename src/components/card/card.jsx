import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  //   const backgroundColor = card.backgroundColor;

  return (
    <section className={`${styles.container}`}>
      <div className={styles.logo__box}>
        <img
          className={styles.log__img}
          src="/images/default_logo.png"
          alt="logo"
        />
      </div>
      <div className={styles.contents}>
        <h1 className={styles.name}>{card.name}</h1>
        <p className={styles.company}>{card.company}</p>
        <p className={styles.rank}>{card.rank}</p>
        <p className={styles.email}>{card.email}</p>
        <p className={styles.comment}>{card.comment}</p>
      </div>
    </section>
  );
};
export default Card;
