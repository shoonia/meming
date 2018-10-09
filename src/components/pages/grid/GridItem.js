import styled from 'styled-components';

export default styled.article.attrs({
  className: 'box has-text-centered',
})`
  padding: 15px;
  margin: 1%;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 46.5%;
  }
  @media screen and (max-width: 576px) {
    width: 99%;
  }
`;
