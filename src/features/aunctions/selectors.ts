import { RootState } from '../../app/store';
import { createSelector } from '@reduxjs/toolkit';

export const getAunctions = (state: RootState) => state.aunctions;

export const aunctionsSelector = createSelector(
  getAunctions,
  (state) => state
);
