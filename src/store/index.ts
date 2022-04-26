import { configureStore } from '@reduxjs/toolkit';
import { homeApi } from './modules/home/api';
import homeSlice from './modules/home';

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    home: homeSlice,
  },

  // Thêm cấu hình middleware để dùng được các chức năng của RTK Query như caching, invalidation, polling, ...
  middleware: (gDM) => gDM()
    .concat(homeApi.middleware),
});


export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>