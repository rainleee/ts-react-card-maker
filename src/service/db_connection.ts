import { CardMetaData, UserPersonalCards } from './../store/models';
import { firebaseDatabase } from './firebase';

/*
  2021.08.31
  firebase database connection class
  author rainlee
  */
// TODO: doc작업 여기처럼 해놓고 params에 대해 써놓기
interface Database {
  saveCard(userId: string, card: CardMetaData): void;
  removeCard(userId: string, cardId: CardMetaData['id']): void;
  syncCards(userId: string, onUpdate: (cards: UserPersonalCards) => void): void;
}

class DbConnection implements Database {
  //firebase data save
  saveCard(userId: string, card: CardMetaData) {
    const {
      id,
      theme,
      name,
      company,
      title,
      email,
      message,
      fileName,
      fileURL,
    } = card;

    //firebase write
    firebaseDatabase.ref(`users/${userId}/cards/${id}`).set({
      id,
      name,
      company,
      theme,
      title,
      email,
      message,
      fileName,
      fileURL,
    });
  }

  /**
   * delete card
   * @param {string} userId - user UID
   * @param {string} cardId - card id
   */
  removeCard(userId: string, cardId: CardMetaData['id']) {
    firebaseDatabase.ref(`users/${userId}/cards/${cardId}`).remove();
  }

  //realtime sync
  /**
   * database와 cards state의 정보를 동일하게 업데이트하는 함수
   * @param {string} userId - user UID
   * TODO: funciton 관련내용 찾아서 적기
   * @param {UserPersonalCards}
   */
  syncCards(userId: string, onUpdate: (cards: UserPersonalCards) => void) {
    const cards = firebaseDatabase.ref(`users/${userId}/cards`);

    cards.on('value', snapshot => {
      const cards: UserPersonalCards = snapshot.val();
      cards && onUpdate(cards);
    });

    //off()를 이용해 불필요한 network 통신을 최소화
    return () => cards.off();
  }
}

export default DbConnection;
