export default () => {
  if (process.env.NODE_ENV === 'development') {
    if ('devToolsExtension' in window) {
      return window.devToolsExtension();
    }
  }
  return f => f;
};
