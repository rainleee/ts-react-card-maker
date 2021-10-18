import {
  UserCredential,
  FirebaseUser,
  firebaseAuth,
  githubProvider,
  googleProvider,
} from './firebase';

/*
  2021.08.19
  firebase auth service class
  author rainlee
  */

// TODO: 이 타입들 나중에 한곳에 모아두고 import하기
type CallbackFunction = (user: FirebaseUser | null) => void;

// login 시 type
type LoginProvider = typeof googleProvider | typeof githubProvider;

// type FirebaseAuthSign = Promise<firebase.auth.UserCredential>;

// auth 시도 시 필수 function
interface FirebaseAuthService {
  login(providerName: string): UserCredential;
  onAuthChange(onUserChanged: Function): void;
  logout(): Promise<void>;
  getProvider(providerName: string): LoginProvider;
}

class AuthService implements FirebaseAuthService {
  //login service
  login(providerName: string): UserCredential {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  //auth state 변경 시 user정보 update
  // TODO: Callback 함수를 인자로 넣고 그것을 type 지정하는것이 완료되지 않음.
  onAuthChange(onUserChanged: CallbackFunction) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  logout(): Promise<void> {
    return firebaseAuth.signOut();
  }

  getProvider(providerName: string): LoginProvider {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
