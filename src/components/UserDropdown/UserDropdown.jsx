import React from 'react';
import './UserDropdown.scss';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

export const UserDropdown = ({ userList }) => {
  return (
    <div className='dropdown'>
      <ListGroup variant='flush' className='dropdown__list'>
        {userList.length ? (
          userList.map((user) => (
            <Link
              to={`user/${user.id}`}
              key={user.id}
              className='dropdown__link'
            >
              <ListGroup.Item action>{user.name}</ListGroup.Item>
            </Link>
          ))
        ) : (
          <ListGroup.Item>
            <Alert variant='warning'>No matching suggestions</Alert>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};
