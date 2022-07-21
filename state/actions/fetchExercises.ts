import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import apiService from '../../services/api.service';

export const fetchExercises = createAsyncThunk(
  `exercises/fetchAll`,
  async () => {
    return await apiService.getExercises();
  },
);

export const fetchExercisesReducer = {
  [fetchExercises.pending as unknown as string]: (state: any, action: any) => {
    state.loading = true;
    state.items = [];
  },
  [fetchExercises.fulfilled as unknown as string]: (
    state: any,
    action: any,
  ) => {
    state.loading = false;
    state.items = action.payload;
  },
  [fetchExercises.rejected as unknown as string]: (state: any, action: any) => {
    state.loading = false;
    state.items = [];
    Alert.alert('Error', 'Fetch Exercises Rejected');
  },
};
