// TODO: index 정의
import { combineReducers } from 'redux';
import { cardSlice } from './cardSlice';

export const rootReducer = combineReducers({
  cards: cardSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
