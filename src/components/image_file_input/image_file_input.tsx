import React, { useRef, useState } from 'react';
import ImageUploader from '../../service/image_uploader';
import { ImageFileInfo } from '../../store/models';
import styles from './image_file_input.module.css';

type ImageFileProps = {
  imageUploader: ImageUploader;
  name: string;
  onFileChange: (file: ImageFileInfo) => void;
};

const ImageFileInput = ({
  imageUploader,
  name,
  onFileChange,
}: ImageFileProps) => {
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onButtonClick = (event: React.SyntheticEvent<HTMLElement>) => {
    event.preventDefault();
    inputFileRef.current?.click();
  };

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
