import { firebaseDatabase } from './firebase';

/*
  2021.08.31
  firebase database connection class
  author rainlee
  */
// TODO: doc작업 여기처럼 해놓고 params에 대해 써놓기

type CardMetaData = {
  id: string;
  theme: string;
  name?: string;
  company?: string;
  title?: string;
  email?: string;
  message?: string;
  fileName?: string;
  fileURL?: string;
};
interface Database {
  saveCard(userId: string, card: CardMetaData): void;
  removeCard(userId: string, card: CardMetaData): void;
  syncCards(userId: string, onUpdate: any): void;
}

class DbConnection implements Database {
  //firebase data save
  // TODO:  userID Patitail로 가져오는거 고민해보기
  saveCard(userId: string, card: CardMetaData) {
    // TODO: card data type정의한것 합쳐야됨. 새로운파일 만들어서 관리할 것.
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

  //firebase delete
  removeCard(userId: string, card: CardMetaData) {
    const { id } = card;
    firebaseDatabase.ref(`users/${userId}/cards/${id}`).remove();
  }

  //realtime sync
  // TODO: onUpdate 바꾸기
  syncCards(userId: string, onUpdate: any) {
    const cards = firebaseDatabase.ref(`users/${userId}/cards`);

    cards.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    //off()를 이용해 불필요한 network 통신을 최소화
    return () => cards.off();
  }
}

export default DbConnection;
