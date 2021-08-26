import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputFileRef = useRef();

  const onButtonClick = event => {
    event.preventDefault();
    inputFileRef.current.click();
  };

  const onChange = async event => {
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);

    console.log(uploaded);
    onFileChange({
      name: uploaded.data.original_filename,
      url: uploaded.data.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        className={styles.file}
        name="file"
        ref={inputFileRef}
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;

/* 
  1. 파일 업로드 버튼을 누른다
  2. 파일 선택창이 뜬다
  3. 파일을 고른후 선택을 누르면 파일이 클라우디너리에 업로드되고 
  4. 업로드될때까지 창은 닫아지면 로딩스피너가 뜬다
  5. 업로드 완료 후 파일이름이 표시되고 프리뷰에는 이미지가 뜬다.(확장자명 X)
  */
