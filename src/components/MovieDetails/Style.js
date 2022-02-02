import styled from "styled-components";
export const StyledMovieDetails = styled.div`
 
  width: 100%;

  .moviedetails-content {
   display:flex;
   flex-wrap:wrap;
   width:100%;
  }

  .moviedetails-thumb {
    width: 100%;
    max-width:50%;
    flex: 0 0 50%;
    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
    img {
      max-width:100%;
    }
  }

  .moviedetails-text {
    width: 100%;
    max-width:50%;
    flex: 0 0 50%;
    padding-left:15px;

    h1 {
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
     
    }

    p {
    
      padding-top: 1rem;
    font-size: .875rem;
    line-height: 17px;
letter-spacing: -0.01em;
    }
  }
  .release-date{
    font-weight: 500;
    span{
      font-weight: 100;
      font-size: 1rem;
    }
  }
  .movie-vote{
    padding-top: 1rem;
    font-weight: bold;
    span{
      font-weight: 100;
    }
  }

  .rating {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(
      rgba(128, 128, 128, 0.25),
      rgba(220, 220, 220, 0.25)
    );
    color: whitesmoke;
    font-weight: 800;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 0, 1);
    margin: 0 0 0 0;
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
