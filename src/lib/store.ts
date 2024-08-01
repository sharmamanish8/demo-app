import { configureStore } from '@reduxjs/toolkit';

import profileSlice from './features/profile/profileSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      profile: profileSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
