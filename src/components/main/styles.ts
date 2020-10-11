import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MA;

  height: auto;

  padding: 20px 20px 20px 0;
  margin-left: 35px;

`;

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;

  max-height: 130px;

  margin-bottom: 20px;
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.2);
  border-radius: 14px;

  > img {
    border-radius: 14px 0 0 14px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  padding: 12px;

  > h1 {
    font-size: 1.3rem;
    font-weight: bold;
  }
  > h2 {
    font-size: .8rem;
    font-weight: bold;
    margin: -7px 0 13px 0;
    color: #e1e1e6
  }
  > p {
    overflow: hidden;
    max-width: 95ch;
    text-overflow: ellipsis;
  }
`;
