const sortList = (a, b, sort) => a[sort].localeCompare(b[sort]);

const sortBy = (list, sort, order) => {
  switch (order) {
    case '':
      return list.sort((a, b) => sortList(a, b, sort));

    case 'desc':
      return list.sort((a, b) => sortList(a, b, sort)).reverse();

    default:
      return list;
  }
};

export const prepareList = (
  list,
  sort,
  order,
) => {
  let mapedList = [...list];

  if (sort !== '') {
    mapedList = sortBy(mapedList, sort, order);
  }

  return mapedList;
};

export const prepareDropdownList = (userList, appliedValue) => (
  userList.filter(user => (
    user.name.toLowerCase().includes(appliedValue)
    || user.username.toLowerCase().includes(appliedValue)
    || null
  ))
);
