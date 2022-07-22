import {createSlice} from '@reduxjs/toolkit';
import {fetchExercisesReducer} from './actions/fetchExercises';
import {createExerciseReducer} from './actions/createExercise';
import {deleteExerciseReducer} from './actions/deleteExercise';
import {updateExerciseReducer} from './actions/updateExercise';
import {createCheckinReducer} from './actions/createCheckin';
import {fetchCheckinsReducer} from './actions/fetchCheckins';
const appSlice = createSlice({
  name: 'message',
  initialState: {
    items: [],
    loading: false,
    checkins: [],
    editItem: {},
    streakDays: 0,
    addItemDialogVisible: false,
    editItemDialogVisible: false,
    checkinDialogVisible: false,
    accessToken: null,
  },
  reducers: {
    setAddItemDialogVisible(state, action: any) {
      state.addItemDialogVisible = action.payload;
    },
    setCheckinDialogVisible(state, action: any) {
      state.checkinDialogVisible = action.payload;
    },
    setEditItemDialogVisible(state, action: any) {
      state.editItemDialogVisible = action.payload;
    },
    setEditItem(state, action: any) {
      state.editItem = action.payload;
    },
    setAccessToken(state, action: any) {
      state.accessToken = action.payload;
    },
  },
  extraReducers: {
    ...fetchExercisesReducer,
    ...createExerciseReducer,
    ...deleteExerciseReducer,
    ...updateExerciseReducer,
    ...fetchCheckinsReducer,
    ...createCheckinReducer,
  },
});

export default appSlice.reducer;
export const {
  setAddItemDialogVisible,
  setCheckinDialogVisible,
  setEditItemDialogVisible,
  setEditItem,
  setAccessToken,
} = appSlice.actions;
