import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchFindData = createAsyncThunk(
  'fetch/findData',
  (info, {dispatch}) => {
    try {
    } catch (error) {}
  },
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    findNavBarList: [],
  },
  reducers: {
    changeFindNavBarListAction(state, {payload}) {
      state.findNavBarList = payload;
    },
  },
});

export const {changeFindNavBarListAction} = homeSlice.actions;

export default homeSlice.reducer;
