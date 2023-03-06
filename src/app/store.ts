import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { aunctionsReducer } from '../features/aunctions';

export const store = configureStore({
  reducer: {
    aunctions: aunctionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
