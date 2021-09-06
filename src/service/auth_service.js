import firebase from 'firebase';
import firebaseApp from './firebase';

/*
  2021.08.19
  firebase auth service class
  author rainlee
  */
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
}

export default AuthService;
