import { UserPersonalCards } from './../models';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserPersonalCards = {};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    //sync reducers
    setCards(state, action) {
      Object.keys(action.payload).map(
        key => (state[key] = action.payload[key])
      );
    },

    /**
     * card infomation create or update
     *
     * 신규카드가 만들어질 경우는 카드를 추가하고, 기존카드(id가 존재하는경우)일 경우 상태를 업데이트한다
     */
    addOrUpdateCard(state, action) {
      state[action.payload.id] = action.payload;
    },

    deleteCard(state, action) {
      delete state[action.payload.id];
    },
  },
  //async reducers
  extraReducers: builder => builder.addCase('', () => {}),
});
