import React from "react";
import styles from "./login.module.css";
import Footer from "../footer/footer";
import CardMakerHeader from "../header/card_maker_header";

const Login = ({ authService }) => {
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };

  return (
    <section className={styles.login}>
      <CardMakerHeader />
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
      <Footer />
    </section>
  );
};

export default Login;
