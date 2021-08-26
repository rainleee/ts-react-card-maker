/* 
autor: rainlee
description: cloudinary에 image upload를 위한 class
*/
class ImageUploader {
  constructor(httpClient) {
    this.imageUploader = httpClient;
  }

  async upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );

    const response = await this.imageUploader.post(
      `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`,
      formData
    );

    return await response;
  }
}

export default ImageUploader;

// axios이용하기
//클라우디너리 사용해서 만들기
//edit form에 사용자 이미지가 이미 있다면 파일이름이 나오게 구성,
//없으면 No file이라는 이름이 나오게 바꾸기
//업로딩 되는동안에는 로딩스피너 만들기

/* 
1.이미지 서비스 만들기
2.클라우디너리? 에서 image 저장하고 그것을 불러오는것 하기
3. 버튼이 이미지가 없으면 no file, 있으면 이름을 보여준다.
*/
