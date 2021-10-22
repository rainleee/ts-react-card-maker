import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';
import { CardMetaData, UserPersonalCards } from '../../store/models';

export type EditorProps = {
  FileInput: (props: any) => JSX.Element;
  cards: UserPersonalCards;
  addCard: (card: CardMetaData) => void;
  updateCard: (card: CardMetaData) => void;
  deleteCard: (card: CardMetaData) => void;
};

function Editor({
  FileInput,
  cards,
  addCard,
  updateCard,
  deleteCard,
}: EditorProps) {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map(key => (
        <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
      ))}
      <CardAddForm addCard={addCard} FileInput={FileInput} />
    </section>
  );
}

export default Editor;
