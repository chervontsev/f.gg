import { createSlice } from '@reduxjs/toolkit';
import { initialState, Status } from './state';
import { fetchCharacters } from './thunk';
import { RootState } from '..';

export const charactersListSlice = createSlice({
  name: 'charactersList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        const { results, next, previous } = action.payload;
        state.data = results; 
        state.next = next; 
        state.prev = previous; 
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = Status.FAIL;
        if (action.error?.message) {
          state.error = action.error.message;
        }
      })
  },
});

export const charactersList = (state: RootState) => state.characterList.data;
export const charactersStatus = (state: RootState) => state.characterList.status;
export const charactersError = (state: RootState) => state.characterList.error;

export default charactersListSlice.reducer;