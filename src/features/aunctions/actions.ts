import { createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../service/service';

export const getAunctions = createAsyncThunk(
  'aunctions',
  async () => {
    const response = await Service.getAunctions();
    return response;
  }
);

export const getPopulars = createAsyncThunk('popular', async () => {
  const response = await Service.getPopular();
  return response;
});

export const getEthPrice = createAsyncThunk('ethPrice', async () => {
  const response = await Service.getEthPrice();
  return response;
});
