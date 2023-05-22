import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  getGoodsCategoryFetch,
  getGoodsListFetch,
} from '../../../api/modules/shop';

export const fetchGoodsData = createAsyncThunk(
  'fetch/goodsData',
  (info, {dispatch}) => {
    try {
      getGoodsCategoryFetch().then(res => {
        dispatch(changeCateListAction(res));
      });
    } catch (error) {}
  },
);

export const fetchGoodsList = createAsyncThunk(
  'fetch/goodsList',
  (info, {dispatch}) => {
    try {
      getGoodsListFetch(info).then(res => {
        dispatch(changeGoodsListAction(res));
      });
    } catch (error) {}
  },
);

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    cateList: [],
    goodsList: [],
    goodsTotal: 2,
    currentPage: 1,
  },
  reducers: {
    changeCateListAction(state, {payload}) {
      state.cateList = payload;
    },
    changeGoodsListAction(state, {payload}) {
      state.goodsList = [...state.goodsList, ...payload];
    },
    changeCurrentPageAction(state, {payload}) {
      state.currentPage = payload;
    },
  },
});

export const {
  changeCateListAction,
  changeGoodsListAction,
  changeCurrentPageAction,
} = shopSlice.actions;

export default shopSlice.reducer;
