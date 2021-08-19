import React, { useState } from "react";
import styles from "./login.module.css";
import Footer from "../footer/footer";
import CardMakerHeader from "../header/card_maker_header";

const Login = ({ authService }) => {
  const [loginState, setLoginState] = useState(null);

  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(result => setLoginState(result.operationType));
  };

  const onLogout = () => {
    console.log(authService.currentUser());
    authService.currentUser() &&
      authService //
        .logout()
        .then(() => setLoginState(null))
        .catch();
  };

  return (
    <section className={styles.login}>
      <CardMakerHeader loginState={loginState} onLogout={onLogout} />
      {!loginState && (
        <section>
          <h1 className={styles.title}>Login</h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Google
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Github
              </button>
            </li>
          </ul>
        </section>
      )}
      {loginState && (
        <section className={styles.main__contents}>main contents</section>
      )}
      <Footer />
    </section>
  );
};

export default Login;
