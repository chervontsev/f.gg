import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacters } from '@/apis/starwars';

export const fetchCharacters = createAsyncThunk('get/characters', async () => {
  const response = await getCharacters();
  return response.data;
});