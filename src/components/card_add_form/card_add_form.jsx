import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, addCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = file => {
    setFile({
      fileName: file.name, //
      fileURL: file.url,
    });
  };

  //add submit event
  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };

    formRef.current.reset();
    setFile({
      fileName: null, //
      fileURL: null,
    });
    addCard(card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="이름"
        ref={nameRef}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="회사명"
        ref={companyRef}
      />
      <select
        className={styles.select}
        name="theme"
        ref={themeRef}
        placeholder="Theme"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="직급"
        ref={titleRef}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="이메일"
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        name="message"
        rows="3"
        placeholder="자기소개"
        ref={messageRef}
      />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
