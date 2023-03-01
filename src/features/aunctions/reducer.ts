import { createReducer } from '@reduxjs/toolkit';
import { AunctionProps } from '../../components/types/AunctionTypes';
import { getAunctions, getEthPrice, getPopulars } from './actions';

export type AunctionsState = {
  aunctions: AunctionProps[];
  popular: AunctionProps[];
  ethPrice: number;
  pending: boolean;
  error: boolean;
};

const initialState: AunctionsState = {
  aunctions: [],
  popular: [],
  ethPrice: 0,
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
        state.aunctions = payload;
      })
      .addCase(getAunctions.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(getPopulars.pending, (state) => {
        state.pending = true;
      })
      .addCase(getPopulars.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.popular = payload;
      })
      .addCase(getPopulars.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(getEthPrice.pending, (state) => {
        state.pending = true;
      })
      .addCase(getEthPrice.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.ethPrice = payload;
      })
      .addCase(getEthPrice.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  }
);

export default aunctionsReducer;
