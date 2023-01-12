import { Item, Text, DeleteBtn } from './ContactItem.styled';

import { ImCross } from 'react-icons/im';

import { deleteContact } from 'redux/operations';

import { useDispatch } from 'react-redux';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();

  const handleClick = () => dispatch(deleteContact(id));

  return (
    <Item>
      <Text>
        {name}: {phone}
      </Text>
      <DeleteBtn type="button" onClick={handleClick}>
        Delete
        <ImCross
          style={{
            color: 'red',
            width: '10',
            marginLeft: '5',
          }}
        />
      </DeleteBtn>
    </Item>
  );
};

export default ContactItem;
