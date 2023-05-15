import {createSlice} from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    token: '',
    userInfo: {},
  },
  reducers: {},
});

export default mainSlice.reducer;
