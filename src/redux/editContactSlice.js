import { createSlice } from '@reduxjs/toolkit';

const editContactSlice = createSlice({
  name: 'editContact',
  initialState: {},
  reducers: {
    modifyContact(state, action) {
      return action.payload;
    },
  },
});

export const { modifyContact } = editContactSlice.actions;

export const editContactsReducer = editContactSlice.reducer;
