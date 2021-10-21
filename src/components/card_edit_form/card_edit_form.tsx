import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';
import { CardMetaData } from '../../store/models';

// TODO: any 가 있는거 죄다 바꾸기
const CardEditForm = ({
  FileInput,
  card,
  updateCard,
  deleteCard,
}: FormProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);

  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
  }: CardMetaData = card;

  const onFileChange = (file: ImageFileInput) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  //delete submit event
  const onSubmit = (event: React.ChangeEvent<HTMLElement>) => {
    event.preventDefault();
    deleteCard(card);
  };

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();

    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='이름'
        value={name}
        ref={nameRef}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        placeholder='회사명'
        value={company}
        ref={companyRef}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name='theme'
        value={theme}
        ref={themeRef}
        onChange={onChange}
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        placeholder='직급'
        value={title}
        ref={titleRef}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        placeholder='이메일'
        value={email}
        ref={emailRef}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name='message'
        rows={3}
        placeholder='자기소개'
        value={message}
        ref={messageRef}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

// TODO: react props after redux change
interface FormProps {
  FileInput: any;
  card: any;
  updateCard: any;
  deleteCard: any;
}

/**
 * image data type
 */
type ImageFileInput = {
  name: string;
  url: string;
};

export default CardEditForm;
