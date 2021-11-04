import Card from '../card/card';
import styles from './preview.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

// TODO: maker에서 delete를 하면 preview에 적용이 안됨.
function Preview() {
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(cards).map(key => (
          <Card card={cards[key]} key={key} />
        ))}
      </ul>
    </section>
  );
}

export default Preview;
