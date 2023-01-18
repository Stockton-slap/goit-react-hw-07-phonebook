import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleLoading = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handleLoading,
    [fetchContacts.rejected]: handleError,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContact.pending]: handleLoading,
    [addContact.rejected]: handleError,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteContact.pending]: handleLoading,
    [deleteContact.rejected]: handleError,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );

      state.items.splice(index, 1);
    },
    [editContact.pending]: handleLoading,
    [editContact.rejected]: handleError,
    [editContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map(contact => {
        if (contact.id === action.payload.id) {
          return action.payload;
        } else {
          return contact;
        }
      });
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
