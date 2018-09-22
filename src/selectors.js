// redux store: page
export const getItems = state => state.page.items;
export const getPageCount = state => state.page.pageCount;
export const isPageLoading = state => state.page.isLoading;

// redux store: cache
export const getCache = state => state.cachePages;
export const getCachePage = pageNumber => state => state.cachePages[pageNumber];

// redux store: meme
export const getMeme = state => state.meme.item;
export const isMemeExist = state => state.meme.isExist;

// react-router:
export const getNumberOfPage = props => (parseInt(props.match.params.number, 10) || 0);
export const getIdOfMeme = props => props.match.params.id;
