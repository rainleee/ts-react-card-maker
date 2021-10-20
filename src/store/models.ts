// Card
export type CardMetaData = {
  id: string;
  theme: 'light' | 'dark' | 'colorful';
  name?: string;
  company?: string;
  title?: string;
  email?: string;
  message?: string;
  fileName?: string;
  fileURL?: string;
};

// Card Metadata setCard updated type
// maker.jsx createOrUpdateCard()
export type UpdatedOrDeletedCard = {
  [index: string]: CardMetaData | undefined;
  id?: CardMetaData;
};

// useHistory
export interface StateHistory extends History {
  readonly id: string;
}
