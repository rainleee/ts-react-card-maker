import { useEffect } from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';
import CardMakerHeader from '../header/card_maker_header';
import { useHistory } from 'react-router-dom';

const Login = ({ authService }: any) => {
  const history = useHistory();

  useEffect(() => {
    authService //
      .onAuthChange((user: any) => {
        //go to maker
        user && goToMaker(user.uid);
      });
  });

  const onLogin = (event: any) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data: any) => {
        goToMaker(data.user.uid);
      });
  };

  const goToMaker = (userId: string) => {
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
