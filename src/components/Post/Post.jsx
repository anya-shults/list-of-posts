import React, { useEffect, useState } from 'react';
import { getCommets, getPost, getUser } from '../../api/api';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Post = () => {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState('');
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userId, postId } = useParams();

  useEffect(() => {
    getPost(postId)
      .then(setPost);
    
    getUser(userId)
      .then((user) => setUser(user.name));

    getCommets(postId)
      .then(setComments)
      .finally(() => setIsLoading(false));
  }, [userId, postId]);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>{post.title}</h2>
          <h5><i>Post by {user}</i></h5>
          <p>{post.body}</p>
          <Accordion>
            <Accordion.Header>
              <h3>Comments:</h3>
            </Accordion.Header>
            <Accordion.Body>
              <ListGroup variant='flush'>
                {comments.map(comment => (
                  <ListGroup.Item key={comment.id}>
                    <Row>
                      <Col sm={9}>
                        <strong>{comment.name}</strong>
                      </Col>
                      <Col sm={3}>
                        <i>by {comment.email}</i>
                      </Col>
                    </Row>
                    <p>{comment.body}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion>
        </>
      )}
    </section>
  );
};
