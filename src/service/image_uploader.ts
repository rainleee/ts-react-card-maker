import { AxiosInstance } from 'axios';

/* 
autor: rainlee
description: cloudinary에 image upload를 위한 class
*/

type FileInfo = {
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
  lastModified?: any;
  lastModifiedDate?: any;
} & Blob;

class ImageUploader {
  private imageUploader: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.imageUploader = httpClient;
  }

  async upload(file: FileInfo) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'upload_preset',
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
