import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6442a98533997d3ef9167253.mockapi.io';
export const fetchUsers=
  createAsyncThunk(
  'users/fetchAll',
  async (page=1, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=${page}&limit=4`);
      console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
