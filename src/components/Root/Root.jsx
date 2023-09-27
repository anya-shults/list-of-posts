import React from 'react';
import { Route, Routes, HashRouter as Router, Navigate } from 'react-router-dom';
import { App } from '../../App.jsx';
import { UserPosts } from '../UserPosts';
import { ListPage } from '../../page/ListPage/index.js';
import { UserPage } from '../../page/UserPage';
import { Post } from '../Post';
import { UserAlbums } from '../UserAlbums';
import { Album } from '../Album';

export const Root = () => (
  <Router>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<ListPage />} />
        <Route path="user/:userId" element={<UserPage />} />
        <Route path="user/:userId/album/:albumId" element={<Album />} />
        <Route path="user/:userId/post/:postId" element={<Post />} />
        <Route path="posts/:userId/post/:postId" element={<Post />} />
        <Route path="posts/:userId" element={<UserPosts />} />
        <Route path="albums/:userId/album/:albumId" element={<Album />} />
        <Route path="albums/:userId" element={<UserAlbums />} />
        <Route path="home" element={<Navigate to=".." replace />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  </Router>
);
