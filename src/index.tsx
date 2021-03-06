import axios, { AxiosInstance } from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ImageFileInput from './components/image_file_input/image_file_input';
import AuthService from './service/auth_service';
import DbConnection from './service/db_connection';
import ImageUploader from './service/image_uploader';
import { Provider } from 'react-redux';
import store from './store';

const authService = new AuthService();

//firebase noSQL database
const dbConnection = new DbConnection();

//cloudnary url
const httpClient: AxiosInstance = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/`,
});

const imageUploader = new ImageUploader(httpClient);

const FileInput = (props: any): JSX.Element => {
  return <ImageFileInput {...props} imageUploader={imageUploader} />;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        FileInput={FileInput}
        authService={authService}
        dbConnection={dbConnection}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
