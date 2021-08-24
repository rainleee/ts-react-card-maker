import React, { useRef, useState } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = ({ onAddChange }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const onSubmit = event => {
    event.preventDefault();

    const card = {
      id: new Date() || '',
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    console.log(formRef);
    onAddChange(card);
    formRef.current.reset();
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
      <select className={styles.select} name="theme" ref={themeRef}>
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
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
