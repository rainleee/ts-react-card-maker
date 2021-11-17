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
export type UserPersonalCards = {
  [index: string]: CardMetaData;
};

// useHistory
export interface StateHistory extends History {
  readonly id: string;
}
