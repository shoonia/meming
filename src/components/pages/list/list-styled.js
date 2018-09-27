import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';

const animationFadeIn = keyframes`${fadeIn}`;

export const ArticleFadeIn = styled.article.attrs({
  className: 'container box',
})`
  animation: .5s ${animationFadeIn};
  max-width: 600px;
  min-height: 200px;
`;

export const ImgItem = styled.img`
  max-height: 40vh;
`;

export const WrapperLoader = styled.div.attrs({
  className: 'container box has-text-centered has-background-white-ter',
  role: 'presentation',
})`
  max-width: 600px;
`;
