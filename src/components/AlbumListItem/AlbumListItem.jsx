import React, { useEffect, useState } from 'react';
import '../Album/Album.scss';
import { getAlbum } from '../../api/api';
import { Button as CustomButton } from '../Button';
import { Loader } from '../Loader';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const AlbumListItem = ({ album }) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { id, title } = album;

  useEffect(() => {
    getAlbum(id)
      .then((album) => setUrl(album[0].thumbnailUrl))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Card className='card'>
          <Card.Img
            variant='top'
            src={url}
          />
          <Card.Body>
            <Card.Title>{`Album #${id}`}</Card.Title>
            <Card.Body>{title}</Card.Body>
            <Button variant="primary">
              <CustomButton
                name='all photos'
                path='album'
                id={id}
              />
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
