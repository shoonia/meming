import styled from 'styled-components';

export default styled.button.attrs({
  type: 'button',
})`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-touch-callout: none;
`;
