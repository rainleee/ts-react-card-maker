import Login from './components/login/login';
import styles from './app.module.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';
import { AppProps } from './store/common';

function App({ FileInput, authService, dbConnection }: AppProps) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Login authService={authService} />
          </Route>
          <Route path='/maker' exact>
            <Maker
              authService={authService}
              FileInput={FileInput}
              dbConnection={dbConnection}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
