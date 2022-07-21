import {createAsyncThunk} from '@reduxjs/toolkit';
import _ from 'lodash';
import {Alert} from 'react-native';
import apiService from '../../services/api.service';

export const updateExercise = createAsyncThunk(
  `exercises/update`,
  async (payload: any) => {
    return await apiService.updateExercise(payload.id, payload);
  },
);

export const updateExerciseReducer = {
  [updateExercise.pending as unknown as string]: (state: any, action: any) => {
    state.loading = true;
  },
  [updateExercise.fulfilled as unknown as string]: (
    state: any,
    action: any,
  ) => {
    state.loading = false;
    const updatedItem = action.payload;
    const index = _.findIndex(state.items, {id: updatedItem.id});
    state.items.splice(index, 1, updatedItem);
  },
  [updateExercise.rejected as unknown as string]: (state: any, action: any) => {
    state.loading = false;
    Alert.alert('Error', 'Update Exercise Rejected');
  },
};
