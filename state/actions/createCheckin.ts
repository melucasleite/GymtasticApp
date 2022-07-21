import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import apiService from '../../services/api.service';

export const createCheckin = createAsyncThunk('checkin/create', () => {
  return apiService.createCheckin({});
});

export const createCheckinReducer = {
  [createCheckin.pending as unknown as string]: (state: any, action: any) => {
    state.loading = true;
  },
  [createCheckin.fulfilled as unknown as string]: (state: any, action: any) => {
    state.loading = false;
    state.checkins.push(action.payload);
  },
  [createCheckin.rejected as unknown as string]: (state: any, action: any) => {
    state.loading = false;
    Alert.alert('Error', 'Create Checkin Rejected');
  },
};
