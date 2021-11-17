import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  databaseURL: string;
};

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env!.REACT_APP_FIREBASE_API_KEY as string,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID as string,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL as string,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export type FirebaseUser = firebase.User | null;
export type UserCredential = Promise<firebase.auth.UserCredential>;
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
