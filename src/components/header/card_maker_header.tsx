import styles from './card_maker_header.module.css';

type CardMakerHeaderPorps = {
  onLogout?: () => void;
};

function CardMakerHeader({ onLogout }: CardMakerHeaderPorps) {
  return (
    <header className={styles.header}>
      {onLogout && (
        <div className={styles.logout__container}>
          <button className={styles.logout__btn} onClick={onLogout}>
            Logout
          </button>
        </div>
      )}
      <img className={styles.logo} src='/images/logo.png' alt='logo' />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
}

export default CardMakerHeader;
