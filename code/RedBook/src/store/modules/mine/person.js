import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  getUserCollectListFetch,
  getUserInfoFetch,
  getUserLikeListFetch,
  getUserNoteListFetch,
} from '../../../api/modules/mine/person';

export const fetchUserInfo = createAsyncThunk(
  'fetch/userInfo',
  (info, {dispatch}) => {
    try {
      getUserInfoFetch().then(res => {
        if (res.code === 1) {
          dispatch(changeUserInfoAction(res.result));
        }
      });
    } catch (error) {}
  },
);

export const fetchUserNoteList = createAsyncThunk(
  'fetch/userNoteList',
  (info, {dispatch}) => {
    try {
      if (info.type === 'note') {
        getUserNoteListFetch(info?.payload).then(res => {
          if (res.code === 1) {
            dispatch(changeNoteListAction(res.data));
          }
        });
      } else if (info.type === 'collect') {
        getUserCollectListFetch(info?.payload).then(res => {
          if (res.code === 1) {
            dispatch(changeCollectListAction(res.data));
          }
        });
      } else if (info.type === 'like') {
        getUserLikeListFetch(info?.payload).then(res => {
          if (res.code === 1) {
            dispatch(changeLikeListAction(res.data));
          }
        });
      }
    } catch (error) {}
  },
);

const personSlice = createSlice({
  name: 'person',
  initialState: {
    userInfo: {},
    currentTab: 'note',
    currentPage: 1,
    collectList: [],
    collectTotal: 0,
    likeList: [],
    likeTotal: 0,
    noteList: [],
    noteTotal: 0,
  },
  reducers: {
    changeUserInfoAction(state, {payload}) {
      state.userInfo = payload;
    },
    changeCurrentTabAction(state, {payload}) {
      state.currentTab = payload;
    },
    changeCurrentPageAction(state, {payload}) {
      state.currentPage = payload;
    },
    changeNoteListAction(state, {payload}) {
      state.noteList = payload?.result;
      state.noteTotal = payload?.total;
    },
    changeCollectListAction(state, {payload}) {
      state.collectList = payload?.result;
      state.collectTotal = payload?.total;
    },
    changeLikeListAction(state, {payload}) {
      state.likeList = payload?.result;
      state.likeTotal = payload?.total;
    },
  },
});

export const {
  changeUserInfoAction,
  changeCurrentTabAction,
  changeCurrentPageAction,
  changeNoteListAction,
  changeCollectListAction,
  changeLikeListAction,
} = personSlice.actions;

export default personSlice.reducer;
