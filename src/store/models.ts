// Card
export type CardMetaData = {
  [index: string]: string | undefined;
  id: string;
  theme: CardThemeType;
  // theme?: CardThemeType;
  name?: string;
  company?: string;
  title?: string;
  email?: string;
  message?: string;
  fileName?: string;
  fileURL?: string;
};

export type CardThemeType = 'light' | 'dark' | 'colorful';

// cloudinary image file infomation
export type ImageFileInfo = { name: string; url: string };

// Card Metadata setCard updated type
// TODO: 나중에 maker.tsx쪽에 옮기기. 카드메타데이터들의 묶음이라 여기엔 안어울리는거 같음
export type UserPersonalCards = {
  [index: string]: CardMetaData;
};

// useHistory
export interface StateHistory extends History {
  readonly id: string;
}
