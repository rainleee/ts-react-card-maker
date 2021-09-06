import firebaseApp from './firebase';

/*
  2021.08.31
  firebase database connection class
  author rainlee
  */

class DbConnection {
  // TODO: 변경하기 미완성.
  isExistsUser(uid) {
    const userInfo = firebaseApp.database().ref('users/' + uid);

    userInfo.on('value', snapshot => {
      return snapshot.exists();
    });
  }

  //firebase user id save
  // TODO: 변경하기 미완성.

  /* writeUserData(user) {
    const { uid, email } = user;

    //TODO: read해서 data 비교해서 있으면 그냥 retrun 아니면 write
    firebaseApp
      .database()
      .ref('users/' + uid)
      .set({
        uid,
        email,
      });
  } */

  //firebase data save
  saveCard(userId, card) {
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
    firebaseApp.database().ref(`users/${userId}/cards/${id}`).set({
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
    firebaseApp.database().ref(`users/${userId}/cards/${id}`).remove();
  }

  //realtime sync
  syncCards(userId, onUpdate) {
    const cards = firebaseApp.database().ref(`users/${userId}/cards`);

    cards.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    //off()를 이용해 불필요한 network 통신을 최소화
    return () => cards.off();
  }
}

export default DbConnection;
