import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getHomeFindListFetch} from '../../../api/modules/home/home';

export const fetchFindData = createAsyncThunk(
  'fetch/findData',
  (info, {dispatch}) => {
    try {
      getHomeFindListFetch(info).then(res => {
        if (res.code === 1) {
          dispatch(changeFindListAction(res.data));
        } else {
          throw new Error(res?.message);
        }
      });
    } catch (error) {}
  },
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    findList: [],
    findTotal: 0,
    categoryType: 'recommend',
    currentPage: 1,
  },
  reducers: {
    changeFindListAction(state, {payload}) {
      state.findList = payload?.result;
      state.findTotal = payload?.total;
    },
    changeCateTypeAction(state, {payload}) {
      state.categoryType = payload;
    },
    changeCurrentPageAction(state, {payload}) {
      state.currentPage = payload;
    },
  },
});

export const {
  changeFindListAction,
  changeCateTypeAction,
  changeCurrentPageAction,
} = homeSlice.actions;

export default homeSlice.reducer;
