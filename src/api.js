const getUrl = path => `https://shoonia.wixsite.com/meme-api/_functions${path}`;

const handleErrors = (response) => {
  if (response.status > 399) {
    throw new Error(response.statusText);
  }
  return response;
};

const request = url => fetch(url)
  .then(handleErrors)
  .then(response => response.json());

export const fetchPageByNumber = pageNumber => request(getUrl(`/page/${pageNumber}`));
export const fetchMemeById = id => request(getUrl(`/meme/${id}`));
