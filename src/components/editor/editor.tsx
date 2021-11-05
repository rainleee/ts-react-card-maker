import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import DbConnection from '../../service/db_connection';

export type EditorProps = {
  FileInput: (props: any) => JSX.Element;
  dbConnection: DbConnection;
};

function Editor({ FileInput, dbConnection }: EditorProps) {
  //redux-state
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map(key => (
        <CardEditForm
          key={key}
          card={cards[key]}
          dbConnection={dbConnection}
          FileInput={FileInput}
        />
      ))}
      <CardAddForm FileInput={FileInput} dbConnection={dbConnection} />
    </section>
  );
}

export default Editor;
