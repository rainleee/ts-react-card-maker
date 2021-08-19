import React, { useEffect } from "react";
import styles from "./login.module.css";
import Footer from "../footer/footer";
import CardMakerHeader from "../header/card_maker_header";
import { useHistory } from "react-router-dom";

const Login = ({ authService }) => {
  const history = useHistory();

  useEffect(() => {
    authService //
      .onAuthChange(user => {
        user && goToMaker(user.uid);
      });
  });

  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid));
  };

  const goToMaker = userId => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
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
