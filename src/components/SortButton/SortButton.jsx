import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './SortButton.scss';
import Button from 'react-bootstrap/Button';
import { getSearchWith } from '../../utils/getSearchWith';
import { sortParams } from '../../utils/sortParams';

export const SortButton = ({
  sortType = 'title',
  sort,
  order,
  name = 'Sort list'
}) => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <Link
        to={{
          search: getSearchWith(searchParams, sortParams(sortType, sort, order))
        }}
        className='link'
      >
        <Button variant="outline-primary">
          {name}
        </Button>
      </Link>
    </>
  );
}
