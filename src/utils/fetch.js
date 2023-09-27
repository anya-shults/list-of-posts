const BASE_URL = 'https://jsonplaceholder.typicode.com';

function request(
  url,
  method = 'GET',
  data = null
) {
  const options = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const fetchInfo = {
  get: (url) => request(url),
  // post: ...
  // put: ...
  // patch: ...
  // delete: ...
}