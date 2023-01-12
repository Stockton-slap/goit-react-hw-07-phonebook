import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/operations';

import { selectIsLoading, selectError } from 'redux/selectors';

import { useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <div style={{ fontSize: '50px' }}>Loading...</div>
      )}
      <ContactList />
    </div>
  );
};
