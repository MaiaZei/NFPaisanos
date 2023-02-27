import { createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../service/service';

export const getAunctions = createAsyncThunk(
  'aunctions',
  async () => {
    const response = await Service.getEthPrice();
    console.log(response, 'response');
    return response;
  }
);
