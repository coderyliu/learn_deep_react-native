import {configureStore} from '@reduxjs/toolkit';

import mainReducer from './modules/main';
import homeReducer from './modules/main/home';
import articleReducer from './modules/article-detail/detail';
import personReducer from './modules/mine/person';

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    article: articleReducer,
    person: personReducer,
  },
});

export default store;
