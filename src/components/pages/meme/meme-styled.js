import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';

const animationFadeIn = keyframes`${fadeIn}`;

export const Figure = styled.figure`
  animation: .5s ${animationFadeIn};
  min-width: 10px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export default undefined;
