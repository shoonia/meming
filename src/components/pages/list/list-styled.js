import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';

const animationFadeIn = keyframes`${fadeIn}`;

export const ArticleFadeIn = styled.article`
  animation: .5s ${animationFadeIn};
  max-width: 600px;
`;

export const Img = styled.img`
  max-height: 40vh;
`;

export const Wrapper = styled.div`
  max-width: 600px;
`;
