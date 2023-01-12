import { FilterLabel, FilterValue } from './Filter.styled';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import { selectFilter } from 'redux/selectors';

import { updateFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    dispatch(updateFilter(value));
  };

  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <br />
        <FilterValue type="text" value={filter} onChange={handleChange} />
      </FilterLabel>
    </div>
  );
};

export default Filter;
