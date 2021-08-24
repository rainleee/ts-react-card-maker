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
