import { CardMetaData } from '../store/models';

interface MakerProps {
  createOrUpdateCard: (card: CardMetaData) => void;
  deleteCard: (card: CardMetaData) => void;
  onLogout: (card: CardMetaData) => void;
}
// TODO: keep
// class CardMaker implements MakerProps {

// }

// export default CardMaker;
