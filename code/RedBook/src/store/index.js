import {configureStore} from '@reduxjs/toolkit';

import mainReducer from './modules/main';
import homeReducer from './modules/main/home';
import articleReducer from './modules/article-detail/detail';
import personReducer from './modules/mine/person';
import shopReducer from './modules/shop/index';
import messageReducer from './modules/message/index';

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    article: articleReducer,
    person: personReducer,
    shop: shopReducer,
    message: messageReducer,
  },
});

export default store;
