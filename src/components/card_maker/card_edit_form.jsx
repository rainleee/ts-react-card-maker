import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
  const {
    name, //
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;

  //submit event
  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="이름"
        defaultValue={name}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="회사명"
        defaultValue={company}
      />
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="직급"
        defaultValue={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="이메일"
        defaultValue={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        rows="3"
        placeholder="자기소개"
        defaultValue={message}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;

/* 

<section className={styles.container}>
      <div className={styles.info__row1}>
        <input type="text" placeholder="이름" defaultValue={card.name} />
        <input type="text" placeholder="회사명" defaultValue={card.company} />
        <select className={styles.select} name="background">
          <option value={card.backgroundColor}>{card.backgroundColor}</option>
          <option value="dark">dark</option>
          <option value="white">white</option>
          <option value="green">green</option>
        </select>
      </div>
      <div className={styles.info__row2}>
        <input type="text" placeholder="직급" defaultValue={card.rank} />
        <input type="text" placeholder="이메일" defaultValue={card.email} />
      </div>
      <div className={styles.info__row3}>
        <textarea
          className={styles.comment}
          rows="3"
          placeholder="자기소개"
          defaultValue={card.comment}
        ></textarea>
      </div>
      <div className={styles.info__row4}>
        <button className={styles.image__upload}>image upload</button>
        <button className={styles.delete}>Delete</button>
      </div>
    </section>

*/
