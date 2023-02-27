import { createReducer } from '@reduxjs/toolkit';
import { NFPaisano } from '../../entity/NFPaisano.entity';
import { getAunctions } from './actions';

export type AunctionsState = {
  data: NFPaisano[];
  pending: boolean;
  error: boolean;
};

const initialState: AunctionsState = {
  data: [],
  pending: false,
  error: false,
};

export const aunctionsReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(getAunctions.pending, (state) => {
        state.pending = true;
      })
      .addCase(getAunctions.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getAunctions.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  }
);

export default aunctionsReducer;
