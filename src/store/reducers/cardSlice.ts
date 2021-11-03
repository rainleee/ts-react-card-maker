import { UserPersonalCards } from './../models';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserPersonalCards = {};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    //sync reducers
    // TODO: payload된 동적 키 값을 map으로 할당하는 모습. 나중에 문서화 시킬것.
    // id값을 지정하기때문에 키값이 id: 이렇게 정해진게 아니라 0120102 이렇게 되어 알지 못함
    setCards(state, action) {
      Object.keys(action.payload).map(
        key => (state[key] = action.payload[key])
      );
    },
    addCard(state, action) {},
    updateCard(state, action) {},
    deleteCard(state, action) {},
  },
  //async reducers
  extraReducers: builder => builder.addCase('', () => {}),
});
