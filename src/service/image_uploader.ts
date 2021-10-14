import { AxiosInstance, AxiosResponse } from 'axios';

/* 
autor: rainlee
description: cloudinary에 image upload를 위한 class
*/
class ImageUploader {
  private imageUploader : AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.imageUploader = httpClient;
  }

  async upload(file: any) {
    console.log('file');
    console.log(typeof file);
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET as string
    );

    const response = await this.imageUploader.post(
      `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`,
      formData
    );

    return await response;
  }
}

export default ImageUploader;

//업로딩 되는동안에는 로딩스피너 만들기
