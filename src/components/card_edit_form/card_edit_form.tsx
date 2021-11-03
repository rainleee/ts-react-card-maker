import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';
import { CardMetaData, ImageFileInfo } from '../../store/models';
import { EditorProps } from '../editor/editor';

type CardEditFormProps = Pick<
  EditorProps,
  'FileInput' | 'updateCard' | 'deleteCard'
> & {
  card: CardMetaData;
};

const CardEditForm = ({
  FileInput,
  card,
  updateCard,
  deleteCard,
}: CardEditFormProps) => {
  // input
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // theme
  const themeRef = useRef<HTMLSelectElement>(null);

  // textarea
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { name, company, title, email, message, theme, fileName } = card;

  const onFileChange = (file: ImageFileInfo) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  //delete submit event
  const onSubmit = (event: React.SyntheticEvent<HTMLElement>) => {
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
      {/* <Button /> */}
    </form>
  );
};

export default CardEditForm;
