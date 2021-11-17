import React from 'react';
import { CardMetaData } from '../../store/models';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

function Card({ card }: { card: CardMetaData }) {
  //구조분해할당
  const {
    name, //
    company,
    title,
    email,
    message,
    theme,
    fileURL,
  } = card;

  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt='profile' />
      <div className={styles.contents}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
}
function getStyles(theme: string) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unkown theme: ${theme}`);
  }
}
export default Card;
