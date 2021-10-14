import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

/*
  2021.08.19
  firebase auth service class
  author rainlee
  */

type CallbackFunction = (user: any) => void;

// login 시 type
type LoginProvider = typeof googleProvider | typeof githubProvider;

class AuthService {
  //login service
  // TODO: 타입정의하지 않음.
  login(providerName: string) {
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
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
