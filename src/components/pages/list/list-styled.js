import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';

const animationFadeIn = keyframes`${fadeIn}`;

export const ArticleFadeIn = styled.article.attrs({
  className: 'box',
})`
  animation: .5s ${animationFadeIn};
  max-width: 600px;
  min-height: 200px;
  margin-right: auto;
  margin-left: auto;
`;

export const ImgItem = styled.img`
  max-height: 40vh;
  object-fit: cover; 
`;

export const WrapperLoader = styled.div.attrs({
  className: 'box has-text-centered has-background-white-ter',
  role: 'presentation',
})`
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
`;
