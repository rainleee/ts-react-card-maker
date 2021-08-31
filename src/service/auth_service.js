import firebase from 'firebase';
import firebaseApp from './firebase';

/*
  2021.08.19
  firebase auth service class
  author rainlee
  */
const database = firebaseApp.database();

class AuthService {
  //login service
  login(providerName) {
    const provider = new firebase.auth[`${`${providerName}AuthProvider`}`]();

    return firebaseApp //
      .auth()
      .signInWithPopup(provider);
  }

  //auth state 변경 시 user정보 update
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  logout() {
    return firebaseApp.auth().signOut();
  }

  isExistsUser(uid) {
    const userInfo = firebase.database().ref('users/' + uid);

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
}

export default AuthService;
