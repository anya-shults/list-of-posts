import React, { useEffect, useState, useMemo } from 'react';
import { getUsers } from '../../api/api';
import { Loader } from '../../components/Loader';
import { SortButton } from '../../components/SortButton';
import { prepareList } from '../../utils/prepareList';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar';
import { UserList } from '../../components/UserList';

export const ListPage = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || '';

  useEffect(() => {
    getUsers()
      .then(setUserList)
      .finally(() => setIsLoading(false));
  }, []);

  const preparedUserList = useMemo(() => prepareList(
    userList,
    sort,
    order
  ), [userList, sort, order]);

  return (
    <section>
      {!!isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchBar userList={preparedUserList} />
          <h2>Users:</h2>
          <p>
            Sort by:
              <SortButton
                sortType='name'
                sort={sort}
                order={order}
                name='name'
              />
              <SortButton
                sortType='username'
                sort={sort}
                order={order}
                name='username'
              />
          </p>
          <UserList userList={preparedUserList} />
        </>
      )}
    </section>
  );
};
