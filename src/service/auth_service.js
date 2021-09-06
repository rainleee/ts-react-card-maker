import { firebaseAuth, githubProvider, googleProvider } from './firebase';

/*
  2021.08.19
  firebase auth service class
  author rainlee
  */
class AuthService {
  //login service
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  //auth state 변경 시 user정보 update
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  logout() {
    return firebaseAuth.signOut();
  }

  getProvider(providerName) {
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
