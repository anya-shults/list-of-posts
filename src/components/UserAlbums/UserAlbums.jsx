import React, { useEffect, useMemo, useState } from 'react';
import './UserAlbums.scss';
import { getUser, getUserAlbums } from '../../api/api';
import { useParams, useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader';
import { AlbumListItem } from '../AlbumListItem';
import { prepareList } from '../../utils/prepareList';
import { SortButton } from '../SortButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const UserAlbums = () => {
  const [userAlbums, setUserAlbums] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || '';

  useEffect(() => {
    getUser(userId)
      .then((user) => setCurrentUser(user.name));
      
    getUserAlbums(userId)
      .then(setUserAlbums)
      .finally(() => setIsLoading(false));
  }, [userId]);

  const preparedUserAlbums = useMemo(() => prepareList(
    userAlbums,
    sort,
    order,
  ), [userAlbums, sort, order])

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>{currentUser}`s albums</h2>
          <SortButton sort={sort} order={order} />
          <div className='albums'>
            <Row xs={1} md={4} className="g-4">
              {preparedUserAlbums.map(album => (
                <Col key={album.id} >
                  <AlbumListItem album={album} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </section>
  );
};
