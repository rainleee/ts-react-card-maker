import React from "react";
import styles from "./login.module.css";
import firebase from "firebase";

const Login = () => {
  const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Login</h1>
      </div>
      <div className={`${styles.login} ${styles.google}`}>
        <button
          className={`${styles.login__btn} ${styles.google__btn}`}
          onClick={googleLogin}
        >
          Google
        </button>
      </div>
      <div className={`${styles.login} ${styles.github}`}>
        <button className={`${styles.login__btn} ${styles.github__btn}`}>
          Github
        </button>
      </div>
    </div>
  );
};

export default Login;
