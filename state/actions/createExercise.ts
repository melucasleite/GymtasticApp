import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import apiService from '../../services/api.service';

export const createExercise = createAsyncThunk(
  'exercises/create',
  (payload: any) => {
    return apiService.createExercise(payload);
  },
);

export const createExerciseReducer = {
  [createExercise.pending as unknown as string]: (state: any, action: any) => {
    state.loading = true;
    // state.items = [];
  },
  [createExercise.fulfilled as unknown as string]: (
    state: any,
    action: any,
  ) => {
    state.loading = false;
    state.items.push(action.payload);
  },
  [createExercise.rejected as unknown as string]: (state: any, action: any) => {
    state.loading = false;
    Alert.alert('Error', 'Create Exercise Rejected');
  },
};
