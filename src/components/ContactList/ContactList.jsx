import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { selectContacts, selectFilter } from 'redux/selectors';

import { List } from './ContactList.styled';
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

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
