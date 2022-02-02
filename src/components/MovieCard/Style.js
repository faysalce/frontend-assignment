import styled from "styled-components";

export const StyledMovieCard = styled.div`  
display:flex;
flex-direction:column;
border-radius: 6px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .15);
  overflow:hidden;
  .card-media{
    position:relative;

  }

.card-image{
    position:relative;

    ::before{
      display: block;
      content: "";
      width: 100%;
      padding-top: calc((16 / 15) * 100%) ;
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      transition: all ease 0.3s;

      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
  
    }
  }
  
  .card-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top:20px;
    left:20px;
    background: rgba(255, 255, 255, 0.9);
    color: #000;
    border-radius: 50%;
    border: 1px solid #000;
    margin: 0 0 0 0;
  }
  .card-body{
   
    padding: .75rem 1rem;
    .card-title{
      text-align:center;
      font-size: 1rem;
    }
  }
  
  :hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .5);
    cursor:pointer;
    .card-image{
      img{
        transform: scale(0.95);
        
        opacity: 1;
      }
    }
    
  
  }
  @keyframes animateMovieCard {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

`;
