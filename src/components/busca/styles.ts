import styled from 'styled-components';

export const Container = styled.div`
  grid-area: RB;
  max-width: 400px;
  max-height: 600px;

  height: 450px;

  padding: 20px 0 20px 20px;
`;

export const Wrapper = styled.div`
  background-color: #fff;

  width: 100%;
  height: 100%;

  border-radius: 20px;

  box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.2);
`;

export const Title = styled.div`
  background-color: #5ac2e8;
  padding: 20px;
  border-radius: 20px 20px 0 0;

  > h1 {
    font-size: 24px;
    text-align: center;
    color: #fff;
  }
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  > a {
    font-size: 20px;
    padding: 10px 28px;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    text-decoration: none;

    &:hover {
      background-color: #d1d1d1
    }
  }

`;
