import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { editContactsReducer } from './editContactSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    editContact: editContactsReducer,
  },
});

export default store;
