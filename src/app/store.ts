import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { aunctionsReducer } from '../features/aunctions';
import { counterReducer } from '../features/counter';
import { kanyeReducer } from '../features/kanye';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanyeQuote: kanyeReducer,
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
