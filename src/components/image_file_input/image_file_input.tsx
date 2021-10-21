import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

// TODO: props빼고 타입정의 다시하기
const ImageFileInput = ({ imageUploader, name, onFileChange }: any) => {
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onButtonClick = (event: any) => {
    event.preventDefault();
    inputFileRef.current?.click();
  };

  // TODO: event parameter any type 수정할것
  const onChange = async (event: any): Promise<void> => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);

    setLoading(false);
    onFileChange({
      name: uploaded.data.original_filename,
      url: uploaded.data.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        type='file'
        className={styles.file}
        name='file'
        accept='image/*'
        ref={inputFileRef}
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
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
