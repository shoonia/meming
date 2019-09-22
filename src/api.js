const buildApiUrl = (path) => `https://shoonia.wixsite.com/meme-api/_functions${path}`;

const init = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
  credentials: 'omit',
};

const handleErrors = (response) => {
  if (response.status > 399) {
    throw new Error(response.statusText);
  }

  return response;
};

const request = (url) => fetch(url, init)
  .then(handleErrors)
  .then((response) => response.json());

export const fetchPageByNumber = (pageNumber) => request(
  buildApiUrl(`/page/${pageNumber}`),
);

export const fetchMemeById = (id) => request(
  buildApiUrl(`/meme/${id}`),
);
