import { firebaseDatabase } from "./firebase";

/*
  2021.08.31
  firebase database connection class
  author rainlee
  */
// TODO: doc작업 여기처럼 해놓고 params에 대해 써놓기
class DbConnection {
  //firebase data save
  saveCard(userId, card) {
    // TODO: card data type정의한것 합쳐야됨. 새로운파일 만들어서 관리할 것.
    const {
      id,
      name,
      company,
      theme,
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
  removeCard(userId, card) {
    const { id } = card;
    firebaseDatabase.ref(`users/${userId}/cards/${id}`).remove();
  }

  //realtime sync
  syncCards(userId, onUpdate) {
    const cards = firebaseDatabase.ref(`users/${userId}/cards`);

    cards.on("value", snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    //off()를 이용해 불필요한 network 통신을 최소화
    return () => cards.off();
  }
}

export default DbConnection;
