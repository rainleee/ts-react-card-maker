import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ImageFileInput from './components/image_file_input/image_file_input';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';

const authService = new AuthService();

//cloudnary url
const httpClient = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/`,
});

const imageUploader = new ImageUploader(httpClient);

const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);
