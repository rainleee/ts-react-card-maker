import firebase from "firebase";
import firebaseApp from "./firebase";

/*
  2021.08.19
  firebase auth service class
  작성자: 이민우 
*/
class AuthService {
  //login service
  login(providerName) {
    const provider = new firebase.auth[`${`${providerName}AuthProvider`}`]();

    return firebaseApp //
      .auth()
      .signInWithPopup(provider);
  }

  logout() {
    return firebaseApp.auth().signOut();
  }

  currentUser() {
    return firebaseApp.auth().currentUser;
  }
}

export default AuthService;
