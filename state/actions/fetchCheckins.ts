import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import apiService from '../../services/api.service';

export const fetchCheckins = createAsyncThunk(`checkins/fetchAll`, async () => {
  return await apiService.getCheckins();
});

export const fetchCheckinsReducer = {
  [fetchCheckins.pending as unknown as string]: (state: any, action: any) => {
    state.loading = true;
    state.checkins = [];
  },
  [fetchCheckins.fulfilled as unknown as string]: (state: any, action: any) => {
    state.loading = false;
    state.checkins = action.payload;
  },
  [fetchCheckins.rejected as unknown as string]: (state: any, action: any) => {
    state.loading = false;
    state.checkins = [];
    Alert.alert('Error', 'Fetch Checkins Rejected');
  },
};
