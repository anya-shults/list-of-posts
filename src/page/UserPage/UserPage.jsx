import React from 'react';
import { UserPosts } from '../../components/UserPosts';
import { UserAlbums } from '../../components/UserAlbums';

export const UserPage = () => {

  return (
    <section>
      <div>
        <UserPosts />
        <UserAlbums />
      </div>
    </section>
  );
};
