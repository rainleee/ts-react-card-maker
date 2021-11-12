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

type AuthChangeUserFn = (user: FirebaseUser) => void;

// login 시 type
type LoginProvider = typeof googleProvider | typeof githubProvider;

// auth 시도 시 필수 function
interface FirebaseAuthService {
  login(providerName: string): UserCredential;
  onAuthChange(onUserChanged: Function): void;
  logout(): Promise<void>;
  getProvider(providerName: string): LoginProvider;
}

const GOOGLE_PROVIDER_NAME = 'Google';
const GITHUB_PROVIDER_NAME = 'Github';

class AuthService implements FirebaseAuthService {
  //login service
  login(providerName: string): UserCredential {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  //auth state 변경 시 user정보 update
  onAuthChange(onUserChanged: AuthChangeUserFn) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  logout(): Promise<void> {
    return firebaseAuth.signOut();
  }

  getProvider(providerName: string): LoginProvider {
    switch (providerName) {
      case GOOGLE_PROVIDER_NAME:
        return googleProvider;
      case GITHUB_PROVIDER_NAME:
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
