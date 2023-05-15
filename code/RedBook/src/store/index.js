import {configureStore} from '@reduxjs/toolkit';

import mainReducer from './modules/main';
import homeReducer from './modules/main/home';

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
  },
});

export default store;
