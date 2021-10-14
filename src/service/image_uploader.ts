import { AxiosInstance } from "axios";

/* 
autor: rainlee
description: cloudinary에 image upload를 위한 class
*/
// TODO: 다시 타입 정의하기
class ImageUploader {
  private imageUploader: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.imageUploader = httpClient;
  }

  async upload(file: any) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET as string //TODO: casting 재정의
    );

    const response = await this.imageUploader.post(
      `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`,
      formData
    );

    return await response;
  }
}

export default ImageUploader;

// TODO: 업로딩 되는동안에는 로딩스피너 만들기
