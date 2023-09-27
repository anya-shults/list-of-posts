import React, { useEffect, useMemo, useState } from 'react';
import './userPosts.scss';
import { useParams, useSearchParams } from 'react-router-dom';
import { getUser, getUserPosts } from '../../api/api';
import { Button as CustomButton } from '../Button';
import { Loader } from '../Loader';
import { SortButton } from '../SortButton';
import { prepareList } from '../../utils/prepareList';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || '';

  useEffect(() => {
    getUser(userId)
      .then((user) => setCurrentUser(user.name));
    
    getUserPosts(userId)
      .then(setUserPosts)
      .finally(() => setIsLoading(false));
  }, [userId]);

  const preparedUserPosts = useMemo(() => prepareList(
    userPosts,
    sort,
    order,
  ), [userPosts, sort, order])

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>{currentUser}`s posts</h2>
          <SortButton sort={sort} order={order} />
          <ListGroup variant='flush' className='userPosts'>
            {preparedUserPosts.map((post) => (
              <ListGroup.Item key={post.id}>
                <Row className='userPosts__row'>
                  <Col sm={10}>{post.title}</Col>
                  <Col sm={2}>
                    <Button>
                      <CustomButton
                        name='read more'
                        path='post'
                        id={post.id}
                      />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </section>
  );
};
