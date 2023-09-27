import React from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  const { pathname } = useLocation();

  const title = !pathname.slice(1).length
    ? 'User List'
    : 'To the homepage';

  return (
    <header className='header'>
      <Navbar bg='primary' className='header__navbar'>
        <Container>
          <Nav className='header__nav'>
            <Link to='/' className='header__link'>
              {title}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
