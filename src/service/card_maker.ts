import { CardMetaData } from '../store/models';

interface MakerProps {
  createOrUpdateCard: (card: CardMetaData) => void;
  deleteCard: (card: CardMetaData) => void;
  onLogout: (card: CardMetaData) => void;
}
