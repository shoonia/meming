// redux store: list
export const selectListItems = state => state.list.items;
export const selectListPageCount = state => state.list.pageCount;
export const selectIsListLoading = state => state.list.isLoading;
export const selectListPageNumber = state => state.list.pageNumber;
export const selectListLength = state => state.list.length;

// redux store: cache
export const selectCachePages = state => state.cachePages;
export const selectCachePageByNumber = pageNumber => state => state.cachePages[pageNumber];

// redux store: meme
export const selectMemePage = state => state.meme.item;
export const selectIsMemeExist = state => state.meme.isExist;
export const selectIsMemeLoading = state => state.meme.isLoading;
export const selectHasMemeError = state => state.meme.hasError;

// redux store: messages
export const selectMessages = state => state.messages.items;

// react-router:
export const getNumberOfPage = props => (parseInt(props.match.params.number, 10) || 1);
export const getIdOfMeme = props => props.match.params.id;
