import styled from "styled-components";

export const StyledMovieList = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  > h1 {
    font-family: 'Inter', sans-serif;
    color: #000;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin: 2.25rem 0 1.5rem;
    border-radius: 9px;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
`;

export const StyledMovieListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 26px;
  position: relative;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
