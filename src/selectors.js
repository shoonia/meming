// redux store: list
export const getItems = state => state.list.items;
export const getPageCount = state => state.list.pageCount;
export const isPageLoading = state => state.list.isLoading;
export const getPageNumber = state => state.list.pageNumber;
export const getPageLength = state => state.list.length;

// redux store: cache
export const getCache = state => state.cachePages;
export const getCachePage = pageNumber => state => state.cachePages[pageNumber];

// redux store: meme
export const getMeme = state => state.meme.item;
export const isMemeExist = state => state.meme.isExist;
export const isMemeLoading = state => state.meme.isLoading;
export const hasMemeError = state => state.meme.hasError;

// redux store: messages
export const getMessages = state => state.messages.items;

// react-router:
export const getNumberOfPage = props => (parseInt(props.match.params.number, 10) || 1);
export const getIdOfMeme = props => props.match.params.id;
