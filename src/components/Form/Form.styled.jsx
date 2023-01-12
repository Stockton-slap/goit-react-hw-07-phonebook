import styled from 'styled-components';

export const Form = styled.form`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ContactLabel = styled.label`
  margin-bottom: 15px;
`;

export const ContactValue = styled.input`
  width: 250px;
  padding-left: 5px;
`;

export const AddBtn = styled.button`
  width: 150px;
  cursor: pointer;
`;
