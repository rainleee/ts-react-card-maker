import firebaseApp from './firebase';

const database = firebaseApp.database();

/*
  2021.08.31
  firebase database connection class
  author rainlee
  */

class DbConnection {
  isExistsUser(uid) {
    const userInfo = database.ref('users/' + uid);

    userInfo.on('value', snapshot => {
      return snapshot.exists();
    });
  }

  //firebase data write
  writeUserData(user) {
    const { uid, email } = user;

    //TODO: read해서 data 비교해서 있으면 그냥 retrun 아니면 write
    database.ref('users/' + uid).set({
      uid,
      email,
    });
  }

  //firebase data write
  writeCardData(card, userId) {
    console.log('writeCardData');
    console.log(card);
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
    //유저의 정보를 알고 그 유저의 데이터안에 cards => card로 박제할것.
    database.ref(`users/${userId}/cards/${id}`).set({
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

  async readCardData(userId) {
    const cards = await database.ref(`users/${userId}/cards`);

    cards.on('value', async snapshot => {
      const data = snapshot.val();
      console.log(data);
      return await data;
    });
  }
}

export default DbConnection;
