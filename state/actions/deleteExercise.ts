import {createAsyncThunk} from '@reduxjs/toolkit';
import _ from 'lodash';
import {Alert} from 'react-native';
import apiService from '../../services/api.service';

export const deleteExercise = createAsyncThunk(
  'exercises/delete',
  (payload: any) => {
    return apiService.deleteExercise(payload);
  },
);

export const deleteExerciseReducer = {
  [deleteExercise.pending as unknown as string]: (state: any, action: any) => {
    state.loading = true;
  },
  [deleteExercise.fulfilled as unknown as string]: (
    state: any,
    action: any,
  ) => {
    state.loading = false;
    _.remove(state.items, {id: action.meta.arg});
  },
  [deleteExercise.rejected as unknown as string]: (state: any, action: any) => {
    state.loading = false;
    Alert.alert('Error', 'Delete Exercise Rejected');
  },
};
