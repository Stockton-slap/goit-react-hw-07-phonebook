import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { Form, ContactLabel, ContactValue, AddBtn } from './Form.styled';

import { selectEditContact } from 'redux/selectors';

import { editContact } from 'redux/operations';

import { useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('Add contact');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const editContactData = useSelector(selectEditContact);
  const { name: editName, phone: editPhone } = editContactData;

  const handleSubmit = e => {
    e.preventDefault();

    const sameName = contacts.find(contact => contact.name === name);

    if (sameName) {
      return alert('There is already a contact with such a name.');
    }

    if (editContactData.name) {
      dispatch(editContact({ name, number, id: editContactData.id }));
    } else {
      dispatch(addContact({ name, number }));
    }

    setName('');
    setNumber('');
    setText('Add contact');
  };

  useEffect(() => {
    if (editName) {
      setName(editName);
      setNumber(editPhone);
      setText('Save contact');
    }
  }, [editName, editPhone]);

  return (
    <Form onSubmit={handleSubmit}>
      <ContactLabel>
        Name
        <br />
        <ContactValue
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </ContactLabel>
      <ContactLabel>
        Number
        <br />
        <ContactValue
          type="text"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </ContactLabel>
      <AddBtn type="submit">{text}</AddBtn>
    </Form>
  );
};

export default ContactForm;
