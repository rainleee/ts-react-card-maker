import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  databaseURL: string;
};

const firebaseConfig: FirebaseConfig = {
  // TODO: env에 있는 API keys를 다른방식으로 구현하기 (string | undefined)로 되어있어서 강제 캐스팅을 해야함.
  // 하지만 꼭 존재해야 하는 값이기 때문에 다른방식이 좋을것 같음.
  apiKey: process.env!.REACT_APP_FIREBASE_API_KEY as string,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID as string,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL as string,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
