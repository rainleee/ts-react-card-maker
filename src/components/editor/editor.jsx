import React from "react";
import CardMakerWrite from "../card_maker/card_maker_write";
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map(card => (
        <CardMakerWrite key={card.id} card={card} />
      ))}
    </section>
  );
};

export default Editor;
