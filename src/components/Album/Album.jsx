import React, { useEffect, useMemo, useState } from 'react';
import './Album.scss';
import { Loader } from '../Loader';
import { getAlbum } from '../../api/api';
import { useParams, useSearchParams } from 'react-router-dom';
import { prepareList } from '../../utils/prepareList';
import { SortButton } from '../SortButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export const Album = () => {
  const [album, setAlbum] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { albumId } = useParams();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || '';

  useEffect(() => {
    getAlbum(albumId)
      .then(setAlbum)
      .finally(() => setIsLoading(false));
  }, [albumId]);

  const preparedAlbum = useMemo(() => prepareList(
    album,
    sort,
    order,
  ), [album, sort, order])

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>Album #{albumId}</h2>
          <SortButton sort={sort} order={order} />
          <div className='albums'>
            <Row xs={1} md={4} className="g-4">
              {preparedAlbum.map(photo => (
                <Col key={photo.id} >
                  <Card className='card'>
                    <Card.Img
                      variant='top'
                      src={photo.url}
                    />
                    <Card.Body>
                      <Card.Title>{photo.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </section>
  );
};
