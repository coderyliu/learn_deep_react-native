import {configureStore} from '@reduxjs/toolkit';

import mainReducer from './modules/main';
import homeReducer from './modules/main/home';
import articleReducer from './modules/article-detail/detail';

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    article: articleReducer,
  },
});

export default store;
