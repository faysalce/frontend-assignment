import styled from "styled-components";

export const StyledSearchBar = styled.div`
  width: 100%;

`;

export const StyledSearchBarContent = styled.div`

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 0 15px;

.header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom: 1px solid #C0C4CC;
  padding-top:.75rem;
  padding-bottom:.75rem;
}
  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: rgba(187, 0, 17, 1);
    z-index: 1000;
  }

  input {
    
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E");
   background-repeat:no-repeat;
   background-position: 10px 50%;

   display: block;
    width: 100%;
    padding: 0.375rem 0.75rem 0.375rem 2.25rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    :focus {
      outline: none;
    }

    ::placeholder {
    }

    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;
