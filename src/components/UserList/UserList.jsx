import React from 'react';
import './UserList.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Button as CustomButton } from '../Button';

export const UserList = ({ userList }) => {
  return (
    <ListGroup variant='flush' className='userList'>
      {userList.map((user) => (
        <ListGroup.Item key={user.id}>
          <Row className='userList__row'>
            <Col sm={4}>{user.name}</Col>
            <Col sm={4}>{`(@${user.username})`}</Col>
            <Col sm={4}>
              <ButtonGroup>
                <Button>
                  <CustomButton
                    name='view posts'
                    path='posts'
                    id={user.id}
                  />
                </Button>
                <Button>
                  <CustomButton
                    name='view albums'
                    path='albums'
                    id={user.id}
                  />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
