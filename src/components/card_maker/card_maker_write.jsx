import React from "react";
import styles from "./card_maker_write.module.css";

const CardMakerWrite = ({ card }) => {
  return (
    <section className={styles.container}>
      <div className={styles.info__row1}>
        <input type="text" placeholder="이름" value={card.name} />
        <input type="text" placeholder="회사명" value={card.company} />
        <select className={styles.select} name="background">
          <option value={card.backgroundColor}>{card.backgroundColor}</option>
          <option value="dark">dark</option>
          <option value="white">white</option>
          <option value="green">green</option>
        </select>
      </div>
      <div className={styles.info__row2}>
        <input type="text" placeholder="직급" value={card.rank} />
        <input type="text" placeholder="이메일" value={card.email} />
      </div>
      <div className={styles.info__row3}>
        <textarea
          className={styles.comment}
          rows="3"
          placeholder="자기소개"
          value={card.comment}
        ></textarea>
      </div>
      <div className={styles.info__row4}>
        <button className={styles.image__upload}>image upload</button>
        <button className={styles.delete}>Delete</button>
      </div>
    </section>
  );
};

export default CardMakerWrite;
