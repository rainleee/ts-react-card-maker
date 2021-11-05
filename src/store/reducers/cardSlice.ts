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

    /**
     * card infomation create or update
     *
     * 신규카드가 만들어질 경우는 카드를 추가하고, 기존카드(id가 존재하는경우)일 경우 상태를 업데이트한다
     */
    addOrUpdateCard(state, action) {
      state[action.payload.id] = action.payload;
    },

    // TODO: 나중엔 지우지말고 임시보관함에 보관했다가 며칠이내에 복구가능하게 만들기
    deleteCard(state, action) {
      delete state[action.payload.id];
    },
  },
  //async reducers
  extraReducers: builder => builder.addCase('', () => {}),
});
