const isMobile = () => 'ontouchstart' in window && window.screen.availWidth < 768;
const rootStyle = document.documentElement.style;

export const hideScroll = (flag) => {
  if (flag) {
    rootStyle.overflow = 'hidden';
    if (!isMobile()) {
      rootStyle.paddingRight = '13px';
    }
  } else {
    rootStyle.overflow = 'auto';
    rootStyle.paddingRight = '0';
  }
};

export default undefined;
