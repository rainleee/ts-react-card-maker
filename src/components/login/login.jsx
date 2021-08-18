import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Login</h1>
      </div>
      <div className={`${styles.login} ${styles.google}`}>
        <button
          className={`${styles.login__btn} ${styles.google__btn}`}
          onClick={onLogin}
        >
          Google
        </button>
      </div>
      <div className={`${styles.login} ${styles.github}`}>
        <button
          className={`${styles.login__btn} ${styles.github__btn}`}
          onClick={onLogin}
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default Login;
