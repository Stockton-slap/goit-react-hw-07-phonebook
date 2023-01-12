import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';

import { useMemo } from 'react';

import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(({ name }) => {
        const normalizedFilter = name
          .toLowerCase()
          .includes(filter.trim().toLowerCase());

        return normalizedFilter;
      }),
    [contacts, filter]
  );

  console.log(filteredContacts);

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
