import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

import { ThreeDots } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ paddingLeft: '30px' }}>
      <h1
        style={{
          margin: '0',
          marginTop: '40px',
          marginBottom: '20px',
          padding: '0',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />

      <h2
        style={{
          margin: '0',
          marginTop: '40px',
          marginBottom: '20px',
          padding: '0',
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && !error && (
        <div style={{ fontSize: '50px' }}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="inherit"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
      <ContactList />
    </div>
  );
};
