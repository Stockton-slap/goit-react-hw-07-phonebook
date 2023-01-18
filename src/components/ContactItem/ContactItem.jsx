import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import { ImCross } from 'react-icons/im';
import PropTypes from 'prop-types';

import { Item, Text, DeleteBtn } from './ContactItem.styled';

import { modifyContact } from 'redux/editContactSlice';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();

  const handleClick = () => dispatch(deleteContact(id));

  const handleEditBtn = () => dispatch(modifyContact(contact));

  return (
    <Item>
      <Text>
        {name}: {phone}
      </Text>
      <button type="button" onClick={handleEditBtn}>
        Edit
      </button>
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

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
