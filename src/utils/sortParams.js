export const sortParams = (sortType, sort, order) => {
  const firstClick = sortType !== sort;
  const secondClick = sortType === sort && order === '';
  const thirdClick = sortType === sort && order === 'desc';

  switch (true) {
    case firstClick:
      return { sort: sortType, order: null };

    case secondClick:
      return { sort: sortType, order: 'desc' };

    case thirdClick:
      return { sort: null, order: null };

    default:
      throw new Error('Wrong parameters');
  }
};
