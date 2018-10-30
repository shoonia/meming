import styled from 'styled-components';

export default styled.article`
  display: block;
  padding: 20px 15px;
  margin: 1%;
  width: 30%;
  text-align: center;
  color: #4A4A4A;
  background-color: #FFF;
  box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 46.5%;
  }
  @media screen and (max-width: 576px) {
    width: 99%;
  }
`;
