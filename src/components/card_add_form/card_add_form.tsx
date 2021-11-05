import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  CardMetaData,
  CardThemeType,
  ImageFileInfo,
  StateHistory,
} from '../../store/models';
import { cardSlice } from '../../store/reducers/cardSlice';
import Button from '../button/button';
import { EditorProps } from '../editor/editor';
import styles from './card_add_form.module.css';

type CardAddFormProps = Pick<EditorProps, 'FileInput' | 'dbConnection'>;

function CardAddForm({ FileInput, dbConnection }: CardAddFormProps) {
  const dispatch = useDispatch();
  const historyState = useHistory<History>()?.location?.state;
  const userId = historyState && (historyState as StateHistory).id;

  // input
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // theme
  const themeRef = useRef<HTMLSelectElement>(null);

  // textarea
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // form
  const formRef = useRef<HTMLFormElement>(null);

  const [file, setFile] =
    useState<Pick<CardMetaData, 'fileName' | 'fileURL'>>();

  const onFileChange = (file: ImageFileInfo) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  //add submit event
  const onSubmit = (event: React.SyntheticEvent<HTMLElement>) => {
    event.preventDefault();

    const card: CardMetaData = {
      id: Date.now().toString(), //uuid
      name: nameRef?.current?.value || '',
      company: companyRef?.current?.value || '',
      theme: themeRef?.current?.value as CardThemeType,
      title: titleRef?.current?.value || '',
      email: emailRef?.current?.value || '',
      message: messageRef?.current?.value || '',
      fileName: file?.fileName || '',
      fileURL: file?.fileURL || '',
    };

    (formRef.current as HTMLFormElement).reset();

    setFile({
      fileName: undefined, //
      fileURL: undefined,
    });

    // state set
    dispatch(cardSlice.actions.addOrUpdateCard(card));

    //firebase database new data set
    dbConnection.saveCard(userId, card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='이름'
        ref={nameRef}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        placeholder='회사명'
        ref={companyRef}
      />
      <select
        className={styles.select}
        name='theme'
        ref={themeRef}
        placeholder='Theme'
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
        ref={titleRef}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        placeholder='이메일'
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        name='message'
        rows={3}
        placeholder='자기소개'
        ref={messageRef}
      />
      <div className={styles.fileInput}>
        <FileInput name={file?.fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Add' onClick={onSubmit} />
      {/* <Button /> */}
    </form>
  );
}

export default CardAddForm;
