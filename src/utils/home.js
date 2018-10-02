const isMobile = () => 'ontouchstart' in window && window.screen.availWidth < 768;
const isEdge = () => window.navigator.userAgent.indexOf('Edge') > -1;

const rootStyle = document.documentElement.style;
const padding = isEdge() ? '12px' : '17px';

export const hideScroll = (flag) => {
  if (flag) {
    rootStyle.overflow = 'hidden';
    if (!isMobile()) {
      rootStyle.paddingRight = padding;
    }
  } else {
    rootStyle.overflow = 'auto';
    rootStyle.paddingRight = '0';
  }
};

export default undefined;
