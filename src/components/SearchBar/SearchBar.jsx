import React, { memo, useMemo, useState } from 'react';
import './SearchBar.scss';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { UserDropdown } from '../UserDropdown';
import { debounce } from 'lodash';
import { prepareDropdownList } from '../../utils/prepareList';

export const SearchBar = memo(({ userList }) => {
  const [value, setValue] = useState('');
  const [appliedValue, setAppliedValue] = useState('');

  const userListForDropdown = useMemo(() => 
    prepareDropdownList(userList, appliedValue), [userList, appliedValue]
  )

  const applyValue = useMemo(() => (
    debounce(setAppliedValue, 1500)
  ), []);

  const handleChange = (event) => {
    const normalisedEvent = event.target.value.toLowerCase();

    setValue(event.target.value);
    applyValue(normalisedEvent);
  };

  const handleBlur = () => {
    setValue('');
    applyValue('');
  }

  return (
    <section className='searchBar'>
      <InputGroup >
        <Form.Control
          type='search'
          placeholder='Enter name or username'
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </InputGroup>
      {appliedValue && 
        <UserDropdown userList={userListForDropdown}
      />}
    </section>
  );
});
