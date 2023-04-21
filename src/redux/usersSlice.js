import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operation";

const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  const handleFulfilled = state => {
    state.isLoading = false;
    state.error = null;
  };

export const usersSlice = createSlice({
    name:"users",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
      },
      extraReducers: {
        [fetchUsers.pending]: handlePending,
    
        [fetchUsers.fulfilled](state, action) {
          handleFulfilled(state);
          state.items.push(...action.payload);
        },

        [fetchUsers.rejected]: handleRejected,
      },

})

export const userReducer = usersSlice.reducer;