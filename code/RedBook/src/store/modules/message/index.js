import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getMessageListFetch} from '../../../api/modules/message';

export const fetchMessageData = createAsyncThunk(
  'fetch/messageData',
  (info, {dispatch}) => {
    try {
      getMessageListFetch(info).then(res => {
        dispatch(changeMessageListAction(res));
      });
    } catch (error) {}
  },
);

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messageList: [],
    listTotal: 2,
    currentPage: 1,
  },
  reducers: {
    changeMessageListAction(state, {payload}) {
      state.messageList = [...state.messageList, ...payload];
    },
    changeCurrentPageAction(state, {payload}) {
      state.currentPage = payload;
    },
  },
});

export const {changeCurrentPageAction, changeMessageListAction} =
  messageSlice.actions;

export default messageSlice.reducer;
