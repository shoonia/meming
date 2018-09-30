const isMobile = () => 'ontouchstart' in window && window.screen.availWidth < 768;
const rootStyle = document.documentElement.style;

export const hideScroll = (flag) => {
  if (flag) {
    rootStyle.overflow = 'hidden';
    if (!isMobile()) {
      rootStyle.paddingRight = '17px';
    }
  } else {
    rootStyle.overflow = 'auto';
    rootStyle.paddingRight = 'inherit';
  }
};

export default undefined;
