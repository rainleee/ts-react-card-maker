import React, { useEffect } from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';
import CardMakerHeader from '../header/card_maker_header';
import { useHistory } from 'react-router-dom';

const Login = ({ authService, dbConnection }) => {
  const history = useHistory();

  useEffect(() => {
    authService //
      .onAuthChange(user => {
        //go to maker
        user && goToMaker(user.uid);
      });
  });

  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => {
        //TODO: 문법 질문해보기 && 를 이용해서 2개를 호출할 수 있는지.
        //TODO: 데이터를 보관할때 암호화처리를 하는지.. 이런거 고민하기
        !dbConnection.isExistsUser(data.user.uid) &&
          dbConnection.writeUserData(data.user);
        goToMaker(data.user.uid);
      });
  };

  const goToMaker = userId => {
    history.push({
      pathname: '/maker',
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
