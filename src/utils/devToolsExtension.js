export default () => {
  if (process.env.NODE_ENV === 'development') {
    if ('devToolsExtension' in window) {
      // eslint-disable-next-line no-underscore-dangle
      return window.__REDUX_DEVTOOLS_EXTENSION__();
    }
  }
  return f => f;
};
