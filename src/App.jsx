import React from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

export const App = () => {
  return (
    <main className="app">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};
