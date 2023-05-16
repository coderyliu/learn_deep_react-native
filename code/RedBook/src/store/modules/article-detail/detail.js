import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {getArticleDetailFetch} from '../../../api/modules/article-detail/detail';

export const fetchArticleDetailData = createAsyncThunk(
  'fetch/articleInfo',
  (articleId, {dispatch}) => {
    try {
      getArticleDetailFetch(articleId).then(res => {
        if (res.code === 1) {
          dispatch(changeArticleInfoAction(res.result));
        }
      });
    } catch (error) {}
  },
);

const articleDetailSlice = createSlice({
  name: 'article-detail',
  initialState: {
    articleInfo: {},
  },
  reducers: {
    changeArticleInfoAction(state, {payload}) {
      state.articleInfo = payload;
    },
  },
});

export const {changeArticleInfoAction} = articleDetailSlice.actions;

export default articleDetailSlice.reducer;
