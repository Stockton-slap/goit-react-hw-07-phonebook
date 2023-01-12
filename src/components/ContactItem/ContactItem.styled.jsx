import styled from 'styled-components';

export const Item = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
`;

export const DeleteBtn = styled.button`
  border: 0;
  background-color: inherit;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
